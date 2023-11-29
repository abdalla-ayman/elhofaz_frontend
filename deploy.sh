#!/bin/bash
git pull
npm i
pm2 restart elhofaz_frontend
echo 'deployment succeeded'