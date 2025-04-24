# load test by artillery

- [artillery.io - Artillery Docs](https://www.artillery.io/docs)

```bash
# node 버전 확인 후 artillery 설치 (MacOS 기준)
$ node -v
$ brew install artillery

# Getting Started
$ curl http://asciiart.artillery.io:8080/dino
                       _. - ~ ~ ~ - .
   ..       __.    .-~               ~-.
   ((\     /   `}.~                     `.
    \\\   {     }               /     \   \
(\   \\~~^      }              |       }   \
 \`.-~ -@~      }  ,-.         |       )    \
 (___     ) _}   (    :        |    / /      `.
  `----._-~.     _\ \ |_       \   / /- _      `.
         ~~----~~  \ \| ~~--~~~(  + /     ~-.     ~- _
                   /  /         \  \          ~- . _ _~_-_.
                __/  /          _\  )
              .<___.'         .<___/

$ vi example-load-test.yaml
# 'artillery run [options] <script>'
$ artillery run example-load-test.yaml
```

## Test Scripts & Runs
- [Test Script - Artillery Docs](https://www.artillery.io/docs/reference/test-script)
- [Run as Artillery test - Artillery Docs](https://www.artillery.io/docs/reference/cli/run)