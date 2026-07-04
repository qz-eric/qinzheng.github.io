function isWhitespaceText(node) {
  return node?.type === 'text' && node.value.trim() === '';
}

function createWithBase(base = '') {
  const normalizedBase = base === '/' ? '' : base.replace(/\/$/, '');
  const untouchedPattern = /^(?:https?:|mailto:|tel:|data:|#|\/\/)/;

  return (path) => {
    if (!path || untouchedPattern.test(path)) {
      return path;
    }

    if (normalizedBase && (path === normalizedBase || path.startsWith(`${normalizedBase}/`))) {
      return path;
    }

    if (path.startsWith('/')) {
      return `${normalizedBase}${path}`;
    }

    return path;
  };
}

function imageChildren(node) {
  if (node?.type !== 'element' || node.tagName !== 'p' || !Array.isArray(node.children)) {
    return [];
  }

  const visibleChildren = node.children.filter((child) => !isWhitespaceText(child));
  if (!visibleChildren.length) {
    return [];
  }

  return visibleChildren.every((child) => child.type === 'element' && child.tagName === 'img')
    ? visibleChildren
    : [];
}

function addClass(node, className) {
  node.properties ??= {};
  const current = node.properties.className;

  if (Array.isArray(current)) {
    node.properties.className = Array.from(new Set([...current, className]));
    return;
  }

  if (typeof current === 'string' && current.length) {
    node.properties.className = Array.from(new Set([...current.split(/\s+/), className]));
    return;
  }

  node.properties.className = [className];
}

function transformChildren(parent, withBase) {
  if (!Array.isArray(parent?.children)) {
    return;
  }

  const transformed = [];

  for (let index = 0; index < parent.children.length; index += 1) {
    const child = parent.children[index];

    if (child?.type === 'element') {
      if (child.tagName === 'img' && typeof child.properties?.src === 'string') {
        child.properties.src = withBase(child.properties.src);
      }

      if (child.tagName === 'a' && typeof child.properties?.href === 'string') {
        child.properties.href = withBase(child.properties.href);
      }
    }

    const images = imageChildren(child);

    if (!images.length) {
      transformChildren(child, withBase);
      transformed.push(child);
      continue;
    }

    images.forEach((image) => {
      if (typeof image.properties?.src === 'string') {
        image.properties.src = withBase(image.properties.src);
      }
    });

    const group = [{ node: child, images }];
    let nextIndex = index + 1;

    while (nextIndex < parent.children.length) {
      const nextImages = imageChildren(parent.children[nextIndex]);
      if (!nextImages.length) {
        break;
      }
      nextImages.forEach((image) => {
        if (typeof image.properties?.src === 'string') {
          image.properties.src = withBase(image.properties.src);
        }
      });
      group.push({ node: parent.children[nextIndex], images: nextImages });
      nextIndex += 1;
    }

    if (group.length === 1) {
      addClass(child, 'prose-image-single');
      transformed.push(child);
    } else {
      transformed.push({
        type: 'element',
        tagName: 'div',
        properties: { className: ['prose-image-group'] },
        children: group.flatMap((item) => item.images)
      });
    }

    index = nextIndex - 1;
  }

  parent.children = transformed;
}

export default function rehypeImageGroups(options = {}) {
  const withBase = createWithBase(options.base);

  return (tree) => {
    transformChildren(tree, withBase);
  };
}
