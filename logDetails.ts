type Uid = number | string // type alias

// when we use | it's a union type in Typescript
var firstName: string | undefined;

function logDetails(uid: Uid, item: string) {
  console.log(`a product with ${uid} has a title ${item} name`)
}

function logInfo(id: Uid, user: string) {
  console.log(`an user with ${id} has a name ${user}`)
}

type Platform = 'Windows' | 'Linux' | 'Mac OS'

function renderPlatform(platform: Platform) {
  return platform
}

logDetails(123, 'sapato');
logDetails('123', ' sapato');