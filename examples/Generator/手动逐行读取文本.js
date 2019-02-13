/**
 * Created by yvan on 2016-06-28.
 */
function* numbers() {
    let file = new FileReader("data.txt");
    try {
        while(!file.eof) {
            yield parseInt(file.readLine(), 10);
        }
    } finally {
        file.close();
    }
}

// 上面代码打开文本文件，使用yield语句可以手动逐行读取文件