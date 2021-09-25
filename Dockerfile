###################################################
#         FIRST STEP BUILD REACT PROJECT          #
###################################################

# USING NODE 16
FROM node:16 AS Node16

# CREATING WORK DIR
WORKDIR /app

# COPING OF PACKAGE JSON FILES
COPY package*.json ./

# INSTALING DEPENDECYS
RUN npm install 

# COPING ALL PROJECT INTO WORK DIR
COPY . .

# CREATING BUILD OF REACT PROJECT
RUN npm run build


###################################################
#        SECOND STEP CREATING NGINX SERVER        #
###################################################

# USING NGINX
FROM  nginx:1.21.3 AS Nginx121

# COPING ALL FILE IN Node16 INTO /app/build
COPY --from=Node16 /app/build /usr/share/nginx/html

#USING PORT 80
EXPOSE 80

#COMMAND TO INITIALIZATION NGINX
CMD ["nginx","-g","daemon off"]