import data1 from '@/assets/data/modelData/1.json'
import data2 from '@/assets/data/modelData/2.json'

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
      {
        cover:  "https://www.听闻.cn:5244/d/本地/阿里云盘资料备份共享/图片/图床/2023/12/19/65817e07d35ab.png",
        id: 2,
        json: data2,
        state: 1,
        title: "基础模板2",
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
    dataList: [
      {
        id: 1,
        json: {
          tag: "Text",
          text: "基础大标题",
          fontSize: 21,
          fontWeight: "normal",
        },
        class: 'big-h',
        state: 1,
        title: "基础大标题",
      },
      {
        id: 2,
        json: {
          tag: "Text",
          text: "基础小标题",
          fontSize: 18,
          fontWeight: "normal",
        },
        class: 'mid-h',
        state: 1,
        title: "基础小标题",
      },
      {
        id: 3,
        json: {
          tag: "Text",
          text: "这里是用来作为正文使用的字段，建议您在使用的过程中使用较长的文字，如：工作经历、产出等",
          fontSize: 14,
          fontWeight: "bold",
        },
        class: 'bold-text',
        state: 1,
        title: "加粗正文",
      },
      {
        id: 3,
        json: {
          tag: "Text",
          text: "这里是用来作为正文使用的字段，建议您在使用的过程中使用较长的文字，如：工作经历、产出等",
          fontSize: 14,
          fontWeight: "normal",
        },
        class: 'main-text',
        state: 1,
        title: "基础正文",
      },
    ],
    noMore: false
  }
  return {
    page
  }
}
