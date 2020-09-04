# The minimal baseline we need for Nodejs
FROM node:12.18.3-alpine

WORKDIR /app

RUN apk --no-cache add shadow \  
    bash \
    gcc \                                                                                         
    musl-dev \                                                                                    
    autoconf \                                                                                    
    automake \                                                                                    
    make \                                                                                        
    libtool \                                                                                     
    nasm \                                                                                        
    tiff \                                                                                        
    jpeg \                                                                                        
    zlib \                                                                                        
    zlib-dev \                                                                                    
    file \                                                                                        
    pkgconf \
    vim                                                                               

# COPY the package.json file, update any deps and install them
COPY package.json . 
RUN yarn install && yarn cache clean --force
# copy the whole source folder(the dir is relative to the Dockerfile 
COPY . .

EXPOSE 3000 8000 9929 9230

CMD ["yarn", "develop", "-H", "0.0.0.0" ]