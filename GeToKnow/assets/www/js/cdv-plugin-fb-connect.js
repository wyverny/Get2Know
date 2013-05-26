  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>phonegap-facebook-plugin/www/cdv-plugin-fb-connect.js at master · phonegap/phonegap-facebook-plugin · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="eVfN/MBaGvyyZLnKt7ME6KiXQ3O55/LmVvzhoY5KIQE=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-aacfd01406222a8e32af6bf66a2eed1a08267178.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-30896c5685c3dd8da766a4fd3065a563107c9370.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-ec9348b8374c693b0749d0b95b215fe3f5414fd0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-3a11f3836624f198d32737512fe1c445445987b3.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="bdd56032babb410898471b4229dd697b">

        <link data-pjax-transient rel='permalink' href='/phonegap/phonegap-facebook-plugin/blob/afec3d215bd31019f7c3d745ed2e3455381d5ede/www/cdv-plugin-fb-connect.js'>
    <meta property="og:title" content="phonegap-facebook-plugin"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/phonegap/phonegap-facebook-plugin"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/467b6e8a473f45a15ac9514a30c15c3d?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Contribute to phonegap-facebook-plugin development by creating an account on GitHub."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="phonegap/phonegap-facebook-plugin"/>

    <meta name="description" content="Contribute to phonegap-facebook-plugin development by creating an account on GitHub." />


    <meta content="60365" name="octolytics-dimension-user_id" /><meta content="1824050" name="octolytics-dimension-repository_id" />
  <link href="https://github.com/phonegap/phonegap-facebook-plugin/commits/master.atom" rel="alternate" title="Recent Commits to phonegap-facebook-plugin:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob windows vis-public env-production  ">
    <div id="wrapper">

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
      <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2Fphonegap%2Fphonegap-facebook-plugin%2Fblob%2Fmaster%2Fwww%2Fcdv-plugin-fb-connect.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="http://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
      data-repo="phonegap/phonegap-facebook-plugin"
      data-branch="master"
      data-sha="b9040825d6fd96e220d665cc53ef2ffbf9ac96ac"
  >

    <input type="hidden" name="nwo" value="phonegap/phonegap-facebook-plugin" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
    </div>

  </div>
</div>


      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fphonegap%2Fphonegap-facebook-plugin"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="octicon octicon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/phonegap/phonegap-facebook-plugin/stargazers">
        832
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fphonegap%2Fphonegap-facebook-plugin"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/phonegap/phonegap-facebook-plugin/network" class="social-count">
        382
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/phonegap" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">phonegap</span>
                  </a></span> /
                <strong><a href="/phonegap/phonegap-facebook-plugin" class="js-current-repository">phonegap-facebook-plugin</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/phonegap/phonegap-facebook-plugin/pulse" class="js-selected-navigation-item " data-selected-links="pulse /phonegap/phonegap-facebook-plugin/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/phonegap/phonegap-facebook-plugin" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /phonegap/phonegap-facebook-plugin">Code</a></li>
    <li><a href="/phonegap/phonegap-facebook-plugin/network" class="js-selected-navigation-item " data-selected-links="repo_network /phonegap/phonegap-facebook-plugin/network">Network</a></li>
    <li><a href="/phonegap/phonegap-facebook-plugin/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /phonegap/phonegap-facebook-plugin/pulls">Pull Requests <span class='counter'>17</span></a></li>

      <li><a href="/phonegap/phonegap-facebook-plugin/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /phonegap/phonegap-facebook-plugin/issues">Issues <span class='counter'>132</span></a></li>



    <li><a href="/phonegap/phonegap-facebook-plugin/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /phonegap/phonegap-facebook-plugin/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/phonegap/phonegap-facebook-plugin/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /phonegap/phonegap-facebook-plugin/tags">Tags <span class="counter ">1</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/phonegap/phonegap-facebook-plugin/blob/cordova-2.5-facebook-ios-3.2/www/cdv-plugin-fb-connect.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="cordova-2.5-facebook-ios-3.2" rel="nofollow" title="cordova-2.5-facebook-ios-3.2">cordova-2.5-facebook-ios-3.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/phonegap/phonegap-facebook-plugin/blob/master/www/cdv-plugin-fb-connect.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/phonegap/phonegap-facebook-plugin/blob/plugman/www/cdv-plugin-fb-connect.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="plugman" rel="nofollow" title="plugman">plugman</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/phonegap/phonegap-facebook-plugin/blob/plugman-FB-SDK-3.2.1/www/cdv-plugin-fb-connect.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="plugman-FB-SDK-3.2.1" rel="nofollow" title="plugman-FB-SDK-3.2.1">plugman-FB-SDK-3.2.1</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/phonegap/phonegap-facebook-plugin/blob/1.4.1support/www/cdv-plugin-fb-connect.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.1support" rel="nofollow" title="1.4.1support">1.4.1support</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/phonegap/phonegap-facebook-plugin" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /phonegap/phonegap-facebook-plugin">Files</a></li>
    <li><a href="/phonegap/phonegap-facebook-plugin/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /phonegap/phonegap-facebook-plugin/commits/master">Commits</a></li>
    <li><a href="/phonegap/phonegap-facebook-plugin/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /phonegap/phonegap-facebook-plugin/branches" rel="nofollow">Branches <span class="counter ">4</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:346cec437163ab6679c96862b6a76ca3 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:346cec437163ab6679c96862b6a76ca3 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-facebook-plugin" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">phonegap-facebook-plugin</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-facebook-plugin/tree/master/www" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">www</span></a></span><span class="separator"> / </span><strong class="final-path">cdv-plugin-fb-connect.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="www/cdv-plugin-fb-connect.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/phonegap/phonegap-facebook-plugin/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/d36d914b008583afdf7ea19d1e9a143e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/stevengill" rel="author">stevengill</a></span>
    <time class="js-relative-date" datetime="2013-02-14T11:46:53-08:00" title="2013-02-14 11:46:53">February 14, 2013</time>
    <div class="commit-title">
        <a href="/phonegap/phonegap-facebook-plugin/commit/4993bdfed213593401c64d8233ebfdea37c484f8" class="message">fixing repo</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="caabernathy" href="/phonegap/phonegap-facebook-plugin/commits/master/www/cdv-plugin-fb-connect.js?author=caabernathy"><img height="20" src="https://secure.gravatar.com/avatar/b328b874e5c3fc731f3edd23ec9cdf6b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="stevengill" href="/phonegap/phonegap-facebook-plugin/commits/master/www/cdv-plugin-fb-connect.js?author=stevengill"><img height="20" src="https://secure.gravatar.com/avatar/d36d914b008583afdf7ea19d1e9a143e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b328b874e5c3fc731f3edd23ec9cdf6b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/caabernathy">caabernathy</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/d36d914b008583afdf7ea19d1e9a143e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/stevengill">stevengill</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/phonegap/phonegap-facebook-plugin/blob/afec3d215bd31019f7c3d745ed2e3455381d5ede/www/cdv-plugin-fb-connect.js" data-title="phonegap-facebook-plugin/www/cdv-plugin-fb-connect.js at master · phonegap/phonegap-facebook-plugin · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">executable file</span>
                  <span>59 lines (57 sloc)</span>
                <span>2.482 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/phonegap/phonegap-facebook-plugin/raw/master/www/cdv-plugin-fb-connect.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/phonegap/phonegap-facebook-plugin/blame/master/www/cdv-plugin-fb-connect.js" class="button minibutton ">Blame</a>
                  <a href="/phonegap/phonegap-facebook-plugin/commits/master/www/cdv-plugin-fb-connect.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="nx">CDV</span> <span class="o">=</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">CDV</span> <span class="o">==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">?</span> <span class="p">{}</span> <span class="o">:</span> <span class="nx">CDV</span> <span class="p">);</span></div><div class='line' id='LC2'><span class="kd">var</span> <span class="nx">cordova</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">cordova</span> <span class="o">||</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Cordova</span><span class="p">;</span></div><div class='line' id='LC3'><span class="nx">CDV</span><span class="p">.</span><span class="nx">FB</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC4'>&nbsp;&nbsp;<span class="nx">init</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">apiKey</span><span class="p">,</span> <span class="nx">fail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC5'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// create the fb-root element if it doesn&#39;t exist</span></div><div class='line' id='LC6'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s1">&#39;fb-root&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">elem</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">);</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">elem</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="s1">&#39;fb-root&#39;</span><span class="p">;</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">elem</span><span class="p">);</span></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">authResponse</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">localStorage</span><span class="p">.</span><span class="nx">getItem</span><span class="p">(</span><span class="s1">&#39;cdv_fb_session&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;{&quot;expiresIn&quot;:0}&#39;</span><span class="p">);</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">authResponse</span> <span class="o">&amp;&amp;</span> <span class="nx">authResponse</span><span class="p">.</span><span class="nx">expirationTime</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">nowTime</span> <span class="o">=</span> <span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">()).</span><span class="nx">getTime</span><span class="p">();</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">authResponse</span><span class="p">.</span><span class="nx">expirationTime</span> <span class="o">&gt;</span> <span class="nx">nowTime</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Update expires in information</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">updatedExpiresIn</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">((</span><span class="nx">authResponse</span><span class="p">.</span><span class="nx">expirationTime</span> <span class="o">-</span> <span class="nx">nowTime</span><span class="p">)</span> <span class="o">/</span> <span class="mi">1000</span><span class="p">);</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">authResponse</span><span class="p">.</span><span class="nx">expiresIn</span> <span class="o">=</span> <span class="nx">updatedExpiresIn</span><span class="p">;</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">localStorage</span><span class="p">.</span><span class="nx">setItem</span><span class="p">(</span><span class="s1">&#39;cdv_fb_session&#39;</span><span class="p">,</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">authResponse</span><span class="p">));</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">FB</span><span class="p">.</span><span class="nx">Auth</span><span class="p">.</span><span class="nx">setAuthResponse</span><span class="p">(</span><span class="nx">authResponse</span><span class="p">,</span> <span class="s1">&#39;connected&#39;</span><span class="p">);</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;Cordova Facebook Connect plugin initialized successfully.&#39;</span><span class="p">);</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="p">(</span><span class="nx">fail</span><span class="o">?</span><span class="nx">fail</span><span class="o">:</span><span class="kc">null</span><span class="p">),</span> <span class="s1">&#39;org.apache.cordova.facebook.Connect&#39;</span><span class="p">,</span> <span class="s1">&#39;init&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">apiKey</span><span class="p">]);</span></div><div class='line' id='LC26'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="nx">login</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="nx">cb</span><span class="p">,</span> <span class="nx">fail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">params</span> <span class="o">=</span> <span class="nx">params</span> <span class="o">||</span> <span class="p">{</span> <span class="nx">scope</span><span class="o">:</span> <span class="s1">&#39;&#39;</span> <span class="p">};</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// login</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span><span class="p">.</span><span class="nx">expiresIn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">expirationTime</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span><span class="p">.</span><span class="nx">expiresIn</span> <span class="o">===</span> <span class="mi">0</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="mi">0</span> </div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">()).</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">+</span> <span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span><span class="p">.</span><span class="nx">expiresIn</span> <span class="o">*</span> <span class="mi">1000</span><span class="p">;</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span><span class="p">.</span><span class="nx">expirationTime</span> <span class="o">=</span> <span class="nx">expirationTime</span><span class="p">;</span> </div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">localStorage</span><span class="p">.</span><span class="nx">setItem</span><span class="p">(</span><span class="s1">&#39;cdv_fb_session&#39;</span><span class="p">,</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span><span class="p">));</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">FB</span><span class="p">.</span><span class="nx">Auth</span><span class="p">.</span><span class="nx">setAuthResponse</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">authResponse</span><span class="p">,</span> <span class="s1">&#39;connected&#39;</span><span class="p">);</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cb</span><span class="p">)</span> <span class="nx">cb</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="p">(</span><span class="nx">fail</span><span class="o">?</span><span class="nx">fail</span><span class="o">:</span><span class="kc">null</span><span class="p">),</span> <span class="s1">&#39;org.apache.cordova.facebook.Connect&#39;</span><span class="p">,</span> <span class="s1">&#39;login&#39;</span><span class="p">,</span> <span class="nx">params</span><span class="p">.</span><span class="nx">scope</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;,&#39;</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC40'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC41'>&nbsp;&nbsp;<span class="nx">logout</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">fail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">localStorage</span><span class="p">.</span><span class="nx">removeItem</span><span class="p">(</span><span class="s1">&#39;cdv_fb_session&#39;</span><span class="p">);</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">FB</span><span class="p">.</span><span class="nx">Auth</span><span class="p">.</span><span class="nx">setAuthResponse</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="s1">&#39;notConnected&#39;</span><span class="p">);</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cb</span><span class="p">)</span> <span class="nx">cb</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="p">(</span><span class="nx">fail</span><span class="o">?</span><span class="nx">fail</span><span class="o">:</span><span class="kc">null</span><span class="p">),</span> <span class="s1">&#39;org.apache.cordova.facebook.Connect&#39;</span><span class="p">,</span> <span class="s1">&#39;logout&#39;</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="nx">getLoginStatus</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">cb</span><span class="p">,</span> <span class="nx">fail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cb</span><span class="p">)</span> <span class="nx">cb</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="p">(</span><span class="nx">fail</span><span class="o">?</span><span class="nx">fail</span><span class="o">:</span><span class="kc">null</span><span class="p">),</span> <span class="s1">&#39;org.apache.cordova.facebook.Connect&#39;</span><span class="p">,</span> <span class="s1">&#39;getLoginStatus&#39;</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="nx">dialog</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="nx">cb</span><span class="p">,</span> <span class="nx">fail</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// login</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cb</span><span class="p">)</span> <span class="nx">cb</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="p">(</span><span class="nx">fail</span><span class="o">?</span><span class="nx">fail</span><span class="o">:</span><span class="kc">null</span><span class="p">),</span> <span class="s1">&#39;org.apache.cordova.facebook.Connect&#39;</span><span class="p">,</span> <span class="s1">&#39;showDialog&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">params</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC58'><span class="p">};</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543528" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="/about">About us</a></dd>
        <dd><a href="/blog">Blog</a></dd>
        <dd><a href="/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.14692s from fe1.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="/site/terms">Terms of Service</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/phonegap/phonegap-facebook-plugin/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="octicon octicon-remove-close ajax-error-dismiss"></a>
    </div>

    
    <span id='server_response_time' data-time='0.14730' data-host='fe1'></span>
    
  </body>
</html>

