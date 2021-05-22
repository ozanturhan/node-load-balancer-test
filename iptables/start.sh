#!/bin/bash

iptables-restore /usr/src/app/iptables.conf
node /usr/src/app/index.js