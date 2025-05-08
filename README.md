# videos

This repo is setting up github pages to host videos which are to be displayed on my website which is hosted on mailerlite.  The videos are to be rendered using plyr.  

Note mailerlite does not allow javascript in it.

I want to be able to navigate the github pages independently of the mailerlite website.  I also want to be able to render the videos in the mailerlite website.  I am using the following steps to achieve this.

inside the github pages repo which i called "videos" i have a folder called "webapp" which contains videos related to my webapp.  Within the webapp folder i have a subfolder for each individual video and any associated thumbnails and transcripts.  This is to allow me to have multiple different pages on my mailerlite website, each referencing one or more videos from within this github repo.


The videos are in the format of mp4.  I have file called "index.html" which contains the index.html file.  Each subfolder within webapp contains a file called "index.html" which contains the index.html file.

There is a folder called "shared" where we want to make sure we store code which will be common across all videos.  we can assume all videos will want the same style and formatting etc.

With this context i need help to make sure they all work together.