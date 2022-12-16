# Email Capture Frontend
Frontend service of an app to capture email addresses and send a welcome email.  

## Project Status
[![Board Status](https://dev.azure.com/simondunn1/ad654d62-da82-4f52-a1ef-24b23fb08634/42838868-90ad-4d49-92f4-0371e09a9c62/_apis/work/boardbadge/2b0ee62b-dc28-45bf-be0b-1216a51fb778?columnOptions=1)](https://dev.azure.com/simondunn1/ad654d62-da82-4f52-a1ef-24b23fb08634/_boards/board/t/42838868-90ad-4d49-92f4-0371e09a9c62/Microsoft.RequirementCategory/)

[![Build Status](https://dev.azure.com/simondunn1/simon-dunn/_apis/build/status/email-capture-frontend?branchName=main)](https://dev.azure.com/simondunn1/simon-dunn/_build/latest?definitionId=2&branchName=main)

## Prerequisites
Requires an a Microsoft Azure subscription with valid Service Bus configured.

Either:
- Docker
- Docker Compose

Or:
- Node 16+

## Running application
### Docker
```
docker-compose build
docker-compose up
```

### Node
```
node app
```
Or:
```
nodemon app
```
