# Environment Variables

```shell
API1_KEY1="dummy key value 1 for API 1"
API1_KEY2="dummy key value 2 for API 1"

API2_KEY1="dummy key value 1 for API 2"
API2_KEY2="dummy key value 2 for API 2"

API1_PORT=5000
API2_PORT=5001
```

# Environment Variables Testing

## Open below url to test api1 keys

http://localhost:5000/api1

```json
{
  "API1_KEY1": "dummy key value 1 for API 1",
  "API1_KEY2": "dummy key value 2 for API 1"
}
```

## Open below url to test api2 keys

http://localhost:5000/api2

```json
{
  "API2_KEY1": "dummy key value 1 for API 2",
  "API2_KEY2": "dummy key value 2 for API 2"
}
```
# Running Project in prod mode
## API 1

```bash
# Build the project
$ npm run build:api1

# Run the project
$ npm run start:api1
```

## API 2

```bash
# Build the project
$ npm run build:api2

# Run the project
$ npm run start:api2
```