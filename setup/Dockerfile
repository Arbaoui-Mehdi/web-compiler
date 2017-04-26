FROM ubuntu:latest

# Update
RUN  apt-get update

# Install all the languages/compilers we are supporting.
RUN apt-get install -y gcc
RUN apt-get install -y python
RUN apt-get install -y nasm

#
RUN apt-get install -y sudo
RUN apt-get install -y bc

# Assembler
RUN echo "nasm -f elf \$1 \n ld -m elf_i386 -s -o \$2 \$2.o" > /usr/local/bin/assembler
RUN chmod u+x /usr/local/bin/assembler

# overwrite this with 'CMD []' in a dependent Dockerfile
CMD ["/bin/bash"]
