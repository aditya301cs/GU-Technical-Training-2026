let imageArr = ["https://titrias.com/files/2015/08/Untitled.png","https://www.w3schools.com/dsa/img_runtime_bubbleSort.png","https://www.w3schools.com/dsa/img_runtime_mergesort.png","https://www.w3schools.com/dsa/img_runtime_quicksort.png","https://www.w3schools.com/dsa/img_runtime_bubbleSort.png","https://www.w3schools.com/dsa/img_runtime_bubbleSort.png","https://www.w3schools.com/dsa/img_runtime_countingSort.png"]

let definitionArr = ["Sorting algorithms are fundamental techniques used in computer science to arrange elements in a particular order, typically ascending or descending. These algorithms help in organizing data efficiently, enabling quicker searches, comparisons, and optimizations in various applications.", 
    "Bubble sort is a basic algorithm for arranging a elements of an array in the correct order. The method works by examining each set of adjacent elements in the array, from left to right, switching their positions if they are out of order. The algorithm then repeats this process until it can run through the entire array and find no two elements that need to be swapped.", 
    "A merge sort is a more complex sort, but also a highly efficient one. A merge sort uses a technique called divide and conquer. The list is repeatedly divided into two until all the elements are separated individually. Pairs of elements are then compared, placed into order and combined. The process is then repeated until the list is recompiled as a whole.",
    "The quick sort method sorts an array by selecting a pivot value. To sort the list into ascending order, the array is partitioned so that values lower than the pivot are moved so that they come before it, and values larger than the pivot are moved so that they come after it. This creates two partitions. The process is repeated on smaller and smaller partitions until the array is fully sorted.",
    "The selection sort algorithm, is remarkably effective. A comparison-based algorithm divides the list into two parts: the sorted part on the left and the unsorted part on the right. Initially, the sorted section is empty, and the unsorted section contains the entire list. This effectiveness is particularly evident when sorting a small list.",
    "Insertion sort is a basic sorting algorithm that sequentially sorts each item in the final sorted array or list. It is significantly low on efficiency while working on comparatively larger data sets. While other algorithms such as quicksort, heapsort, or merge sort have time and again proven to be far more effective and efficient.", 
    "Counting sort is a sorting technique that is used when the range of keys is relatively small and there are duplicate keys. Counting sorts differ from sorts that compare data in multiple passes. They work by creating an array of counters the size of the largest integer in the list therefore, the keys must be integers or data that can be readily converted to integers."]


let bestCase = ["Best case time complexity is the minimum time an algorithm takes to complete, assuming the most favorable input configuration.","O(n)","O(n log n)","O(n log n)","O(n²)","O(n)","O(n + k)"]   
let averageCase = ["The average case time complexity is the expected time taken by an algorithm over all possible inputs, assuming a uniform distribution of inputs.","O(n²)","O(n log n)","O(n log n)","O(n²)","O(n²)","O(n + k)"]
let worstCase = ["Worst case time complexity is the maximum amount of time an algorithm takes to complete, given the least favorable input of size n.","O(n²)","O(n log n)","O(n²)","O(n²)","O(n²)","O(n + k)"]

let spaceComplexity = ["Space complexity is the amount of memory an algorithm uses relative to the input size.","O(1)","O(n)","O(n log n)","O(1)","O(1)","O(n + k)"]
let stability = ["Stability in sorting algorithms means that equal elements retain their original relative order after sorting.","Stable","Stable","Not Stable","Not Stable","Stable","Stable"]
let inplace = ["An in-place sorting algorithm sorts the array without needing extra space proportional to the input size, typically using only a constant amount of additional memory (O(1) space).", "In-place","Not in-place","In-place","In-place","In-place","Not in-place"]

let bubblesort=["1. Initialize a Loop: Start from the first element of the array and compare it with the next element.", "2. Compare and Swap: If the current element is greater than the next element, swap them. Otherwise, move to the next pair of elements.", "3. Repeat for All Elements:Continue this process for the entire array. After one full pass, the largest element will bubble to the end of the array.", "4. Repeat the Process: Perform additional passes for the remaining unsorted elements, reducing the range of comparison after each pass (since the largest elements get sorted at the end).", "5. Terminate When Sorted: Repeat steps 1 to 4 until no swaps are needed during a pass, which means the array is fully sorted."]
let mergeSort=["1. Divide the Array: Recursively split the array into two halves until each subarray contains only one element (base case of recursion).", "2. Recursively Sort the Halves: Recursively apply the merge sort to each half, sorting the left and right subarrays separately.", "3. Merge the Sorted Halves: Merge the two sorted halves by comparing elements from each half, picking the smaller element, and placing it into the new merged array.", "4. Continue Merging: Continue merging the subarrays in a bottom-up manner, combining smaller sorted arrays into larger sorted arrays.", "5. Complete When Fully Merged:Repeat the merging process until the entire array is sorted and only one sorted array remains as the final result."]
let quicksort=["1. Choose a Pivot: Select a pivot element from the array (this can be the first element, last element, or any other strategy).", "2. Partition the Array: Rearrange the elements in the array such that all elements smaller than the pivot are placed to its left, and all elements larger than the pivot are placed to its right. The pivot is now in its correct position." ,"3. Recursively Sort Left Subarray:Apply the quicksort algorithm recursively to the left subarray (elements smaller than the pivot)."," 4. Recursively Sort Right Subarray: Similarly, apply the quicksort algorithm recursively to the right subarray (elements larger than the pivot)."," 5. Terminate When Sorted: Continue this process of partitioning and recursively sorting until the entire array is sorted and no further partitioning is needed."]
let selectionSort=["1. Find the Minimum Element: Start from the first element and search for the smallest element in the entire array.", "2. Swap with the First Element: Once the minimum element is found, swap it with the first element of the array.", "3. Move to the Next Position: Move to the second element and repeat the process by finding the smallest element in the remaining unsorted portion of the array.", "4. Repeat for All Elements: Continue this process, selecting the next smallest element and swapping it into its correct position, moving one position to the right after each iteration.", "5. Terminate When Sorted: Repeat until the entire array is sorted. When no unsorted elements remain, the array is fully sorted."]
let insertionsort=["1. Start with the Second Element: Begin by considering the second element of the array as the key and compare it with the first element.", "2. Compare and Shift: Compare the key with elements before it and shift each larger element one position to the right until you find the correct position for the key.", "3. Insert the Key: Place the key in its correct position in the sorted portion of the array (elements to the left).", "4. Move to the Next Element: Move to the next unsorted element (the next key) and repeat the process of comparing and inserting it into the sorted portion of the array.", "5. Repeat Until Sorted: Continue this process for all remaining elements until the entire array is sorted."]
let countingSort=["1. Find the Range of Elements: Determine the maximum and minimum elements in the input array to establish the range of the input data.", "2. Create a Count Array: Create a count array of size equal to the range of input elements. Initialize all values in the count array to zero.", "3. Count the Occurrences: Traverse the input array and update the count array by incrementing the value at the index corresponding to each element value in the input array.", "4. Accumulate the Count: Modify the count array such that each element at each index stores the sum of previous counts, which gives the position of each element in the sorted output array.", "5. Build the Output Array: Traverse the input array in reverse order and place each element in its correct sorted position in the output array using the count array, maintaining stability. Finally, copy the sorted elements back into the original array."]

export function selectData (sort){
    let dataArr = [];
    switch(sort){
        case "Bubble Sort":
            dataArr =  [imageArr[1], definitionArr[1],bestCase[1],averageCase[1],worstCase[1],spaceComplexity[1], stability[1],inplace[1],bubblesort];
            return dataArr;
        case "Merge Sort":
            dataArr= [imageArr[2], definitionArr[2],bestCase[2],averageCase[2],worstCase[2],spaceComplexity[2], stability[2],inplace[2],mergeSort];
            return dataArr;
        case "Quick Sort":
            dataArr= [imageArr[3], definitionArr[3],bestCase[3],averageCase[3],worstCase[3],spaceComplexity[3], stability[3],inplace[3],quicksort]
            return dataArr;
        case "Selection Sort":
            dataArr= [imageArr[4], definitionArr[4],bestCase[4],averageCase[4],worstCase[4],spaceComplexity[4], stability[4],inplace[4],selectionSort]
            return dataArr;
        case "Insertion Sort":
           dataArr= [imageArr[5], definitionArr[5],bestCase[5],averageCase[5],worstCase[5],spaceComplexity[5], stability[5],inplace[5],insertionsort]
           return dataArr;
        case "Counting Sort":
           dataArr= [imageArr[6], definitionArr[6],bestCase[6],averageCase[6],worstCase[6],spaceComplexity[6], stability[6],inplace[6],countingSort]
           return dataArr;
        default:
            dataArr=[imageArr[0], definitionArr[0],bestCase[0],averageCase[0],worstCase[0],spaceComplexity[0], stability[0],inplace[0]]
            return dataArr;     
    }
}
