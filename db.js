{
    "posts": [
      { "id": 1, "title": "Hello World", "author": "John" },
      { "id": 2, "title": "JSON Server", "author": "Jane" }
    ],
    "comments": [
      { "id": 1, "body": "Great post!", "postId": 1 },
      { "id": 2, "body": "Thanks for the info.", "postId": 2 }
    ]
  }
  "scripts": {
  "start": "json-server --watch db.json --port 5000"
}
