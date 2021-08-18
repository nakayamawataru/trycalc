FROM ruby:2.4

RUN apt-get update -qq && apt-get install -y build-essential nodejs mariadb-client
RUN mkdir /trycalc
WORKDIR /trycalc
COPY Gemfile /trycalc/Gemfile
COPY Gemfile.lock /trycalc/Gemfile.lock
RUN bundle install
COPY . /trycalc