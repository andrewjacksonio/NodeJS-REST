#!/bin/bash
set -e

export IMAGE="097890748571.dkr.ecr.us-west-2.amazonaws.com/example"
export KUBE_IMAGE="097890748571.dkr.ecr.us-west-2.amazonaws.com/eks-kubectl:latest"

if [ "$BUILDKITE_BRANCH" = "develop" ]; then

  docker run -it ${KUBE_IMAGE} set image deployment/nodejs-deployment nodejs=${IMAGE}:${BUILDKITE_BRANCH}-${BUILDKITE_BUILD_NUMBER} -n develop

elif [ "$BUILDKITE_BRANCH" = "master" ]; then

  docker run -it ${KUBE_IMAGE} set image deployment/nodejs-deployment nodejs=${IMAGE}:${BUILDKITE_BRANCH}-${BUILDKITE_BUILD_NUMBER} -n production  

fi

echo "👌"

