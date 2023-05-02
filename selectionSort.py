def selectionSort(arr):

    """

    Sorts a given list using the selection sort algorithm.

    Parameters:

    arr (list): The unsorted list to be sorted.

    Returns:

    list: The sorted list in ascending order.

    """

    for i in range(len(arr)):

        for j in range( i+1, len(arr)):

            if arr[i]>arr[j]:

                arr[i], arr[j] = arr[j], arr[i]

    return arr

L1 = [9, 5, 2, 7, 1, 3, 8, 4, 6]

L2 = [23, 1, 17, 9, 3, 8, 12, 5, 21, 16]

L3 = [54, 29, 13, 46, 82, 37, 91, 68, 75, 41]

L4 = [33, 19, 55, 42, 87, 26, 14, 66, 70, 91, 10]

L5 = [7, 16, 22, 8, 11, 19, 6, 14, 20, 3, 9]

print(selectionSort(L1))   # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

print(selectionSort(L2))   # Output: [1, 3, 5, 8, 9, 12, 16, 17, 21, 23]

print(selectionSort(L3))   # Output: [13, 29, 37, 41, 46, 54, 68, 75, 82, 91]

print(selectionSort(L4))   # Output: [10, 14, 19, 26, 33, 42, 55, 66, 70, 87, 91]

print(selectionSort(L5))   # Output: [3, 6, 7, 8, 9, 11, 14, 16, 19, 20, 22]
