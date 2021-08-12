export default {
  logIn: async () => {
    const body = `query: "query searchScriptMeeting($range: RangeFilter!, $filter: ScriptFilter!) {\n  searchScriptMeeting(range: $range, filter: $filter) {\n    id\n    title\n    description\n    videoUrl\n    imageUrl\n    status\n    privacy\n    publishedBy\n    liked\n    createdAt\n    likesDetail {\n      likes\n      __typename\n    }\n    bookmarked\n    timeRecorded\n    views\n    agents {\n      id\n      kwUid\n      firstName\n      lastName\n      __typename\n    }\n    creatorHashtags {\n      tag\n      id\n      __typename\n    }\n    scripts {\n      videoUrl\n      videoResponseUrl\n      shortDescription\n      hashtags {\n        id\n        description\n        tag\n        __typename\n      }\n      topics {\n        id\n        title\n        __typename\n      }\n      __typename\n    }\n    formats {\n      format\n      videoUrl\n      __typename\n    }\n    __typename\n  }\n}\n"
    variables: {range: {page: 0, size: 20}, filter: {privacy: "PUBLIC"}}`
    const res = await fetch('https://qa-kong.command-api.kw.com/api-connect-scripthub/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    return res
  }
}
