FROM centos:7
USER root
RUN rpm -ivh http://dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/epel-release-7-11.noarch.rpm \
 && rpm -ivh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
RUN yum -y remove nodejs
RUN curl --silent --location https://rpm.nodesource.com/setup_9.x | bash -
RUN yum -y install nodejs