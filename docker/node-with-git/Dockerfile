FROM ubuntu:18.04

RUN apt-get update \
# installing curl
    && apt-get install curl -y \
# installing nodejs
    && curl -sL https://deb.nodesource.com/setup_12.x | bash \
    && apt-get install nodejs -y \
    && apt-get install build-essential -y \
# installing software-properties-common, needed to avoid https://stackoverflow.com/questions/14772508/npm-failed-to-install-time-with-make-not-found-error
    && apt-get install software-properties-common -y \
# installing git
    && add-apt-repository ppa:git-core/ppa -y \
    && apt-get update \
    && apt-get install git -y \
# cleaning apt-get cache
    && apt-get clean