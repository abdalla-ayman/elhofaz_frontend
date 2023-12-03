#!/bin/bash
git pull origin main
npm i
pm2 restart elhofaz_frontend
echo 'deployment succeeded'
