# API Document

# NurlTag

- Usage

```js
query{
  NurlTag(tag:"thisistag",urls:["asdf","asdf"])
}

```

- scheme

```js

type Query {
  NurlTag(tag: String!, urls: [String!]!): String!
}


```

- resolver

```js
export default {
  Query: {
    NurlTag: async (_, args) => {
      const { tag, urls } = args;
      console.log("data incoming", tag, urls);
      return "success";
    },
  },
};
```
