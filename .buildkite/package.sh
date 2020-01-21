#!/bin/bash
set -e

export AWS_REGION="us-west-2"
export IMAGE="097890748571.dkr.ecr.us-west-2.amazonaws.com/example"

docker images

docker tag nodejs-app ${IMAGE}:${BUILDKITE_BRANCH}
aws ecr get-login --no-include-email --region ${AWS_REGION} | bash
docker push ${IMAGE}:${BUILDKITE_BRANCH}

echo "👌"
