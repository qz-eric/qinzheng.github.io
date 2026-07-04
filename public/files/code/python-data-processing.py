"""Placeholder script for atmospheric data processing.

Replace this file with real NetCDF reading, regional averaging and plotting
workflows when the project data are ready.
"""

from pathlib import Path


def main() -> None:
    data_dir = Path("data")
    print(f"Put research data under: {data_dir.resolve()}")
    print("Example workflow: open NetCDF -> select region -> compute statistics -> save figures.")


if __name__ == "__main__":
    main()
