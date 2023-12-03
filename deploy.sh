#!/bin/bash
git pull https://github.com/abdalla-ayman/elhofaz_frontend.git
npm install
pm2 restart elhofaz_frontend
echo 'deployment succeeded'
