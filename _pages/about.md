---
permalink: /
title: "Whichway website 4 (for) Hangzai Homework"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
This is the front page of a website that is used for Hangzai Homework and hosted on GitHub pages.

Education
=========

* [X] Northwest University

  - Xi'an, China
    - 'Bachelor of Electronic System Engineer
      - Sep. 2018 – June 2022
        • GPA=3.53/4.00, Average Score = 88.5/100.0,
        • Major Rank: 12/120, Top 10% Student
        - Third Class Scholarship in 2018
        - Second Class Scholarship in 2019
        - Second Class Scholarship in 2020

  ---
* [X] University of Essex

  - Colchester, England
    - Bachelor of Electronic System Engineer
      - Oct. 2021 – June 2022

Intern Experience
=================


### China Telecom Corporation Limited (July 2020 – Aug. 2020)

##### Engineer
Zhejiang , China

• Basic Ethernet cable and troubleshooting; RJ-45 network cable problems' inspection and production
• Troubleshooting for IP-phone of post office
• Basic intranet switch configuration and network maintenance in 114


### Agilent Technology (June 2021 – Sep. 2021)

##### Software Engineer 
Shanghai, China


• Develop and operate an MVC web app based on .NET CORE3.1 (.NET 5)
• Use Vbscript scripts to periodically automate data processing on SAP system
• Spotfire-based Python crawler for regular automated data processing
• Update from PHP5 to PHP7 of E-checklist


Site-wide configuration
-----------------------

The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header.

Create content & metadata
-------------------------

For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you&#39;ve given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
-----------------------------------------

Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons.

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
-------------

More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
