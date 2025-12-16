@echo off
echo 빌드 중...
call npm run build

echo S3 업로드 중...
aws s3 sync dist/ s3://ai-nexus-app-unique-2024 --delete

echo CloudFront 캐시 무효화 중...
aws cloudfront create-invalidation --distribution-id E3AXEZWXFEOYE3 --paths /*

echo 배포 완료!
pause