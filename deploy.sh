#!/bin/bash
cd /home/ahmed3310/Projects/elhofaz_frontend/
git pull
npm install
npm run build
pm2 restart elhofaz_frontend
echo 'deployment succeeded'
