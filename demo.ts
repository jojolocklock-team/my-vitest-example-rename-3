// 定义一个用于排序的函数
function sortArray<T>(array: T[], order: 'asc' | 'desc' = 'asc'): T[] {
    // 检查数组是否为空
    if (!array || array.length === 0) {
        console.warn('传入的数组为空');
        return [];
    }

    // 判断数组元素是否为可排序类型
    if (typeof array[0] !== 'string' && typeof array[0] !== 'number') {
        console.error('数组元素类型不支持排序');
        return array;
    }

    // 根据指定的顺序进行排序
    const sortedArray = array.sort((a, b) => {
        if (a < b) return order === 'asc' ? -1 : 1;
        if (a > b) return order === 'asc' ? 1 : -1;
        return 0;
    });

    return sortedArray;
}

// 示例用法
const numbers = [10, 5, 3, 12, 7];
const sortedNumbersAsc = sortArray(numbers, 'asc');
console.log('升序排序：', sortedNumbersAsc);

const sortedNumbersDesc = sortArray(numbers, 'desc');
console.log('降序排序：', sortedNumbersDesc);

const strings = ['apple', 'orange', 'banana', 'grape'];
const sortedStringsAsc = sortArray(strings, 'asc');
console.log('升序排序：', sortedStringsAsc);

const sortedStringsDesc = sortArray(strings, 'desc');
console.log('降序排序：', sortedStringsDesc);
