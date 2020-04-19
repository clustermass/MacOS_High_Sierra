### Data recovery and reformatting 2010 MacBook Pro Kingston SSD drive from APFS to HSF+ & clean High Sierra installation after invalid o_oid (0x233b75) Object map is invalid. APFS error.

Recenly my 2010 Macbook pro with High Sierra system installed on Kingston 256gb SSD drive and APFS file system experienced kernel panic crash due to poorly written video driver. It turned out that APFS can fail due to certain system crashes. In my case, after mac failed to boot I was able to boot in recovery with some apple tools like disk utility, terminal and other. I tried to fix it with disk doctor utility, but got an error

`error: om: btn: invalid o_oid (0x233b75)`

`Object map is invalid.`

Some guy named Matt already [described this problem in his blog](https://matt.sh/apfs-object-map-free-recovery), but to sum up, AFAIK there is no way to fix this problem rather than extract all available data and reinstall the system.

In my case, I was able to boot mac from Ubuntu USB drive, pull and compile apfs-fuse driver, and recover some of the data (Downloads folder was completely unaccessible).

After I recovered whatever was possible, I needed to reinstall MacOS High Sierra, and I decided to convert SSD filesystem from APFS to HSF+.

It was sort of surprise for me that I spent 2 hours searching on the internet for a working High Sierra bootable image that I could put on my 8gb flash drive and do a clean install. So, when I finally downloaded it and made a bootable USB I decided to upload it for anyone who is in the same situalion as I was. Here is 

### [MacOS High Sierra full 5gb installation image for USB](https://drive.google.com/file/d/1bTXvIUh7zKG0f6nyZbzrwGVly_H5hIVQ/view?usp=sharing)

with free USB imaging tool included. All you need is working Windows machine and 8GB flash drive.
 
The process of reformatting the drive and converting it from APFS to HSF+ is described [here](https://blog.macsales.com/46896-how-to-revert-a-drive-from-apfs-back-to-hfs/).

The process of installing High Sierra on HSF+ drive without auto-converting it to APFS is described [here](http://blog.centurio.net/2018/05/01/how-to-clean-install-mac-os-high-sierra-without-apfs-on-internal-ssd/), but for me the actual command was with double-dashed instead of single dashes. You can alternatively follow the steps below:
- Open Disk Utility and open a Terminal. Go to the Volume of your attached High Sierra USB Stick.

- Check what is the name of your internal SSD where you want to install the system. Let's assume it's name is "System".

- Now change directory to your installation media (USB drive in this case). 
cd /Volumes/“Install macOS High Sierra“
- Start the installation of High Sierra to the freshly formatted HFS+ volume mounted as „System“. This clean installation will also create the Recovery HD partition.

`"Install macOS High Sierra.app"/Contents/Resources/startOsInstall -–agreetolicense -–converttoapfs NO -–volume /Volumes/System`

If you need to recover data with [apfs-fuse](https://github.com/sgan81/apfs-fuse) driver under Ubuntu live, you may follow [this very helpful gist](https://gist.github.com/tuklusan/ed0c26da22df8106393c2c5b27e82b00). 
Most of the errors I encountered I was able to fix by googling, these are most helful links I found:

[https://github.com/sgan81/apfs-fuse/issues/31](https://github.com/sgan81/apfs-fuse/issues/31)

[https://github.com/sgan81/apfs-fuse/issues/87](https://github.com/sgan81/apfs-fuse/issues/87)


[https://github.com/sgan81/apfs-fuse/issues/82](https://github.com/sgan81/apfs-fuse/issues/82)

[https://github.com/Project-OSRM/osrm-backend/issues/3710](https://github.com/Project-OSRM/osrm-backend/issues/3710)

I hope this will help someone.

I also saved articles that I mentioned here in this repo in case their online versions become inaccessible.