
// This file is to share DB Flow types b/w two different DB js files.

const type Article = {
  id: string,
  content: string,
  rev: number,
}

export default {
  Article,
}
