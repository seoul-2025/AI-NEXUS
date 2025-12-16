#!/bin/bash

# 빌드
npm run build

# S3 업로드
aws s3 sync dist/ s3://ai-nexus-app --delete

# CloudFront 캐시 무효화
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "배포 완료!"