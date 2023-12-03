#!/bin/bash
cd /home/ahmed3310/Projects/elhofaz_frontend/
pwd
git pull
npm install
pm2 restart elhofaz_frontend
echo 'deployment succeeded'
