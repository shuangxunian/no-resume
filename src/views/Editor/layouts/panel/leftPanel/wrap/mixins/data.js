import data1 from '@/assets/data/modelData/1.json';

export function pageData() {
  const page = {
    dataList: [
      {
        cover:  "https://www.听闻.cn:5244/d/本地/阿里云盘资料备份共享/图片/图床/2023/12/18/657fdfbd444f9.png",
        id: 1,
        json: data1,
        state: 1,
        title: "基础模板1",
      },
    ],
    noMore: false
  }
  return {
    page
  }
}

export function textData() {
  const page = {
    dataList: [],
    noMore: false
  }
  return {
    page
  }
}
