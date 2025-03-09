export function generateRandomArray(size: number, max: number): number[] {
    if (size > max) {
        throw new Error("Size cannot be greater than max, as duplicates would be unavoidable.");
    }

    const uniqueNumbers = new Set<number>();
    while (uniqueNumbers.size < size) {
        uniqueNumbers.add(Math.floor(Math.random() * max));
    }

    return Array.from(uniqueNumbers);
}