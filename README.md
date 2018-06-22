# fleet [![Build Status](https://travis-ci.org/vergissberlin/fleet.svg?branch=master)](https://travis-ci.org/vergissberlin/fleet) [![Greenkeeper badge](https://badges.greenkeeper.io/vergissberlin/fleet.svg)](https://greenkeeper.io/)

> Manage your concourse pipeline

Configuration as code. With concourse you can setup a pipeline very easely.
But there is no tool for administrators to configure the teams.

**With fleet you can**
- setup multiple teams with one command
- setup multi pipeline with one command

## Install

```
$ npm install --global fleet
```


## Usage

```bash
$ fleet --help

  Usage
    fleet -c concourse.yml
    ✔ Teams configured
    ✔ Pipelines setted

    fleet set-teams -c concourse.yml
    ✔ Teams configured

    fleet set-pipelines -c concourse.yml
    ✔ Pipelines setted

  Options
    set-teams     Setup all teams
    set-pipelines Setup all pipelines
    -c --config   Path configuration file [Default: false]

  Examples
    $ fleet -c concourse.yml
    $ fleet --config=/home/crazyhorse/concourse.yml
```

## Example configuration
```

server:
  - name: mycompany-ci
    url: https://ci.mycompany.com

teams:
  - name: awesome
    auth: github
      - id: 7032701f5913c4df351e
      - secret: 0f1cf56f74c57c11502e4d1428cdf116b85fc333
    url: https://git.mycompany.com/team/awesome

    pipelines:
      - name: awsomeOne
        repository: http://git.mycompany.com/team/awsome-one.git
        pipeline: ci/pipeline.yml
        variables:
          - ci/variables/credentials.yml
          - ci/variables/messages.yml

      - name: awsomeTwo
        repository: http://git.mycompany.com/team/awsome-two.git
        pipeline: ci/pipeline.yml
        variables:
          - ci/variables/credentials.yml
          - ci/variables/messages.yml

      - name: awsomeThree
        repository: http://git.mycompany.com/team/awsome-three.git
        pipeline: ci/pipeline.yml
        variables:
          - ci/variables/credentials.yml
          - ci/variables/messages.yml

  - name: incredible
    auth: github
      - id: 7032701f5913c4df351e
      - secret: 0f1cf56f74c57c11502e4d1428cdf116b85fc333
    url: https://git.mycompany.com/team/awesome

    pipelines:
      - name: incredibleOne
        repository: http://git.mycompany.com/team/incredible-one.git
        pipeline: ci/pipeline.yml
        variables:
          - ci/variables/credentials.yml
          - ci/variables/messages.yml

      - name: incredibleTwo
        repository: http://git.mycompany.com/team/incredible-two.git
        pipeline: ci/pipeline.yml
        variables:
          - ci/variables/credentials.yml
          - ci/variables/messages.yml
```



## License

MIT © [André Lademann](http://andrelademann.de)
