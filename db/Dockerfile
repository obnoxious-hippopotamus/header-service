# What image do you want to start building on?
FROM mysql:5.7 as builder

# Make a folder in your image where your app's source code can live
RUN ["sed", "-i", "s/exec \"$@\"/echo \"not running $@\"/", "/usr/local/bin/docker-entrypoint.sh"]

# Tell your container where your app's source code will live

# What source code do you want to copy, and where to put it?
COPY schema.sql /docker-entrypoint-initdb.d/

# Does your app have any dependencies that should be installed?
  # That file does the DB initialization but also runs mysql daemon, by removing the last line it will only init
RUN ["/usr/local/bin/docker-entrypoint.sh", "mysqld", "--datadir", "/initialized-db"]

FROM mysql:5.7

COPY --from=builder /initialized-db /var/lib/mysql

# What port will the container talk to the outside world with once created?
EXPOSE 8000

# How do you start your app?




