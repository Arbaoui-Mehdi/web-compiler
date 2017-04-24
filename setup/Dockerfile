
FROM ubuntu:latest

# Update
RUN  apt-get update

# Install all the languages/compilers we are supporting.
RUN apt-get install -y gcc
RUN apt-get install -y python
RUN apt-get install -y strace

#
RUN apt-get install -y sudo
RUN apt-get install -y bc

# overwrite this with 'CMD []' in a dependent Dockerfile
CMD ["/bin/bash"]
