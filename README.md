# ec2-docker-app

EC2 Docker 環境の SPA アプリ

## docker コマンド

```
// ビルド
docker-compose build

// コンテナ起動
docker-compose up

// コンテナ起動(バックグラウンド実行)
docker-compose up -d

// コンテナ停止
docker-compose down

// コンテナ停止&ボリューム削除(DBデータを削除)
docker-compose down -v

// clientコンテナへログイン
docker exec -it ec2_docker_client sh

// apiコンテナへログイン
docker exec -it ec2_docker_api sh

// dbコンテナへログイン
docker exec -it ec2_docker_db /bin/bash
```
