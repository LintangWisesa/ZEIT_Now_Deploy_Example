![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# Deploy NodeJS (Express App) to ZEIT Now

### __ZEIT Now__ ([https://zeit.co](https://zeit.co)) is a cloud platform for serverless deployment. It enables developers to host websites and web services that deploy instantly, scale automatically, and require no supervision, all with minimal configuration. In this repo, I'll share the example of Node.js app (using Express) that can be deployed to ZEIT Now. Follow my instructions below. Happy hacking!

![simplinnovation_openode](./logo_zeit_now.png)

#### 1. Create an account by sign-up/login to [ZEIT Now](https://zeit.co).

#### 2. Install now CLI (Command Line Interface) globally:

```shell
  $ npm i -g now
```

#### 3. Clone the Node.js boilerplate from my repo:

```shell
  $ git clone https://github.com/LintangWisesa/ZEIT_Now_Deploy_Example.git
```

#### 4. Go to the repo then install all dependencies needed:

```shell
  $ cd ZEIT_Now_Deploy_Example
  $ npm i
```

#### 5. Edit Express app route on _index.js_! Make sure there is no error on your app by running index.js. Server will be running by default on localhost:3000!

```shell
  $ node index
```

#### Open *localhost:3000* via web browser. If everything's fine, the response will be similar to the picture below:

![simplinnovation_ok](./result.png)

#### So your app is working fine locally, try also to GET & POST to the same route (_localhost:3000_).

#### 7. Deploy!

```shell
  $ now
```

#### On last step, we will get our app's URL on ZEIT now.

```shell
  > Deploying D:\lintang\express_now under lintang@wisesa.com
  > Synced 1 file (470B) [1s]
  > https://express_now_123456.now.sh [v2] [in clipboard] [1s]
  ┌ index.js        Ready               [17s]
  └── λ index.js (285.91KB) [sfo1]
  > Success! Deployment ready [20s]
```

#### Try to open that URL via browser. Finish! Your app has just been deployed!

### More information [click here](https://www.openode.io/openode-cli).

#

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) | 
[Twitter](https://twitter.com/Lintang_Wisesa) |
[Google+](https://plus.google.com/u/0/+LintangWisesa1) |
[Youtube](https://www.youtube.com/user/lintangbagus) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)