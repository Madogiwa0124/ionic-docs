import { h } from '@stencil/core';
import { GitBranch } from '../../../icons';
import { toHypertext } from '../to-hypertext';

export default (props) => {
  const { page } = props;
  const headings = [...page.headings];
  const repo = renderRepo(page.repo);
  const installation = renderInstallation(page.cordova, page.package);
  const cordovaPromo = renderCordovaPromotion(page.premierSlug);
  const platforms = renderPlatforms(page.platforms);
  const usage = renderUsage(page.codeUsage);
  const capIncompat = renderCapIncompat(page.capacitorIncompatible);
  const isPremier = renderPremier(page.premierSlug);

  if (installation) {
    headings.push({
      text: 'インストール',
      href: '#installation'
    });
  }

  if (isPremier) {
    headings.push({
      text: 'Premier Version Available',
      href: '#premier'
    });
  }

  if (platforms) {
    headings.push({
      text: 'サポートしているプラットフォーム',
      href: '#platforms'
    });
  }

  if (capIncompat) {
    headings.push({
      text: 'Capacitor',
      href: '#capacitor'
    });
  }

  if (usage) {
    headings.push({
      text: '利用方法',
      href: '#usage'
    });
  }

  return (
    <article>
      <h1>{ page.title }</h1>
      <docs-table-of-contents links={headings} basepath={page.path}/>
      <section class="markdown-content">
        {toHypertext(h, page.body)}
      </section>
      { repo }
      { isPremier }
      { cordovaPromo }
      { installation }
      { platforms }
      { capIncompat }
      { usage }
    </article>
  );
};

const renderRepo = (repo: string) => {
  if (!repo) {
    return null;
  }

  return (
    <section>
      <a href={repo} class="outbound" target="_blank"><GitBranch/> { repo }</a>
    </section>
  );
};

const renderCordovaPromotion = (isPremier: string) => {
  // Only show one promo message
  if (isPremier) {
    return;
  }

  return (
    <section>
      <h2>Cordovaの問題で困っていますか？</h2>
      <docs-card class="cordova-ee-card" header="プラグインの問題で貴重な時間を無駄にしないでください." href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native">
        <div>
          <img src="/docs/assets/icons/native-cordova-bot.png" class="cordova-ee-img" />
          <p>本格的なプロジェクトを構築している場合、トラブルシューティングに時間を費やす余裕はありません。Ionicのエキスパートが、保守、サポート、統合に関する公式サポートを提供しています。</p>
          <docs-button class="native-ee-detail">Contact Us Today!</docs-button>
        </div>
      </docs-card>
    </section>
  );
};

const renderInstallation = (cordova: string, npm: string) => {
  if (!cordova || !npm) {
    return null;
  }

  return (
    <section>
      <h2 id="installation">
        <a href="#installation">インストール</a>
      </h2>
      <docs-tabs>
        <docs-tab tab="Community">
          <command-line slot="コミュニティ">
            <command-prompt>{`ionic cordova plugin add ${cordova}`}</command-prompt>
            <command-prompt>{`npm install ${npm}`}</command-prompt>
          </command-line>
        </docs-tab>
        <docs-tab tab="エンタープライズ">
          <blockquote>Ionic Native Enterprise はIonic Teamが完全にサポートしメンテナンスしているプラグインを利用できます。 &nbsp;
            <a class="btn" href="/docs/enterprise">詳しくみる</a> か、エンタープライズプラグインに興味があれば <a class="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">連絡ください</a></blockquote>
        </docs-tab>
      </docs-tabs>
    </section>
  );
};

const renderPlatforms = (platforms: string[] = []) => {
  if (!platforms.length) {
    return null;
  }

  return (
    <section>
      <h2 id="platforms">
        <a href="#platforms">サポートしているプラットフォーム</a>
      </h2>
      <ul>
        {platforms.map(platform => (
          <li>{platform}</li>
        ))}
      </ul>
    </section>
  );
};

const renderUsage = (usage: any) => {
  if (!usage) {
    return null;
  }

  return (
    <section>
      <h2 id="usage">
        <a href="#usage">利用方法</a>
      </h2>
      {toHypertext(h, usage)}
    </section>
  );
};

const renderCapIncompat = (capacitorIncompatible: boolean) => {
  if (!capacitorIncompatible) {
    return null;
  }

  return (
    <section>
      <h2 id="capacitor">
        <a href="#capacitor">Capacitor</a>
      </h2>
      Not compatible
    </section>
  );
};

const renderPremier = (premierSlug: string) => {
  if (!premierSlug) {
    return null;
  }

  return (
    <section>
      <h2 id="premier">
        <a href="#premier">Premier Version Available</a>
      </h2>
      <docs-card class="cordova-ee-card"
        header="Plugins and solutions built and supported by Ionic." href={`/docs/enterprise/${premierSlug}`}>
        <div>
          <img src="/docs/assets/icons/native-enterprise.png" class="cordova-ee-img" />
          <p>Featuring regular release cycles, security and bug fixes, and guaranteed SLAs.</p>
          <docs-button class="native-ee-detail">Available here</docs-button>
        </div>
      </docs-card>
    </section>
  );
};
