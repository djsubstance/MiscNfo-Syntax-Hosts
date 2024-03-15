# The best way to block large ranges of contiguous ranges is install ipset
apt install ipset
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
ipset is already the newest version (7.17-1ubuntu1).
0 upgraded, 0 newly installed, 0 to remove and 5 not upgraded.



--- TO DROP TRAFFIC TO A CERTAIN IP ON A SPECIFIC INTERFACE AND PORT INBOUND / TCP

sudo iptables -A INPUT -i eth0 -p tcp -d 67.207.0.1 --dport 5006 -j DROP
sudo iptables -A INPUT -i eth0 -p tcp -d 67.207.0.1 --dport 8006 -j DROP
sudo iptables -A INPUT -i eth0 -p tcp -d 67.207.0.1 --dport 25 -j DROP
sudo iptables -A INPUT -i eth0 -p tcp -d 67.207.0.1 --dport 2202 -j DROP
sudo iptables -A INPUT -i eth0 -p tcp -d 67.207.0.1 --dport 80 -j DROP





