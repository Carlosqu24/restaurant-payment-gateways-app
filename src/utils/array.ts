
interface SortArrayAlphabeticallyProps<T, K extends keyof T> {
    array: T[],
    targetKey: K
}

export function sortArrayAlphabetically<T, K extends keyof T>({
    array,
    targetKey
}: SortArrayAlphabeticallyProps<T, K>) {
    return array.sort(
        (a: T, b: T) => {

            // const nameA = typeof a[targetKey as K] === "string" ? (a[targetKey as K] as string).toUpperCase() : a[targetKey as K]
            // const nameB = typeof b[targetKey as K] === "string" ? (b[targetKey as K] as string).toUpperCase() : b[targetKey as K]

            const nameA = a[targetKey as K]
            const nameB = b[targetKey as K]


            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        })
}