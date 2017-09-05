# loopback-mixin-common
[loopback.io](https://loopback.io) common useful mixin

## Install
```bash
# cd /path/to/loopback/project/root
# npm install loopback-mixin-common
```

## Config

`server/model-config.json`
```json
{
  "_meta": {
    ...
    "mixins": [
      // add follow line 
      "loopback-mixin-common/mixins",
      ...
    ]
    ...
  }
  ...
}
```

## Usage
`common/models/mymodel.json`
```json
{
  "name": "note",
  "base": "PersistedModel",
  ...
  "mixins": {
     "Timestamp": {
       "modified": 0
     }
   },
  "properties": {
    ...
  },
  ...
}`
```