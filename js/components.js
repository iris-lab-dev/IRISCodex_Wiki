const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);

export const wikiHeader = ({ brand }) => `
  <header class="site-header">
    <a class="brand" href="../" aria-label="${escapeHtml(brand.name)} 홈"><span class="brand-mark">${escapeHtml(brand.mark)}</span><strong>${escapeHtml(brand.name)}</strong></a>
    <nav class="header-nav" aria-label="주요 메뉴"><a href="#overview">문서</a><a href="#history">최근 변경</a><a href="#related">도움말</a></nav>
    <form class="search-form" role="search"><input type="search" placeholder="이 위키에서 검색" aria-label="문서 검색" /><button type="submit" aria-label="검색">⌕</button></form>
  </header>`;

export const affiliationCard = ({ affiliation }) => `
  <section class="affiliation-card theme-${affiliation.theme}">
    <div class="affiliation-title"><span class="orb">✦</span><div><strong>${escapeHtml(affiliation.title)}</strong><small>${escapeHtml(affiliation.subtitle)}</small></div></div>
    <div class="affiliation-links">${affiliation.links.map((link) => `<a href="#related">${escapeHtml(link)}</a>`).join('')}</div>
  </section>`;

export const profileCard = ({ profile }) => `
  <aside class="profile-card theme-${profile.theme}">
    <div class="profile-heading"><div><span>IRISTV CREATOR</span><h2>${escapeHtml(profile.name)}</h2><p>${escapeHtml(profile.enName)}</p></div><i>✦</i></div>
    <img class="profile-image" src="${profile.image}" alt="${escapeHtml(profile.name)}의 일러스트" />
    <p class="profile-tagline">${escapeHtml(profile.tagline)}</p>
    <h3>PROFILE</h3>
    <dl class="profile-list">${profile.rows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl>
    <h3>SOCIAL</h3>
    <dl class="profile-list">${profile.social.map(({ label, value }) => `<div><dt>${escapeHtml(label)}</dt><dd><a href="#related">${escapeHtml(value)}</a></dd></div>`).join('')}</dl>
  </aside>`;

export const tableOfContents = ({ toc }) => `<aside class="toc"><button class="toc-toggle" type="button" aria-expanded="true">목차 <span>⌄</span></button><ol>${toc.map((title, index) => `<li><a href="#section-${index + 1}"><b>${index + 1}.</b> ${escapeHtml(title)}</a></li>`).join('')}</ol></aside>`;

export const dataTable = (rows) => `<div class="data-table"><table><tbody>${rows.map((row) => `<tr>${row.map((cell, index) => `<${index === 0 ? 'th scope="row"' : 'td'}>${escapeHtml(cell)}</${index === 0 ? 'th' : 'td'}>`).join('')}</tr>`).join('')}</tbody></table></div>`;

export const wikiSection = ({ section, index }) => `
  <section class="wiki-section" id="section-${index}" ${index === 1 ? 'data-overview' : ''}>
    <h2><a href="#section-${index}" aria-label="${escapeHtml(section.title)} 링크">${index}. ${escapeHtml(section.title)}</a></h2>
    ${section.lead ? `<p class="lead">${escapeHtml(section.lead)}</p>` : ''}
    ${section.media ? `<figure class="media-card"><img src="../assets/images/iris-aria.svg" alt="아리아 루멘의 데뷔 방송 영상 미리보기" /><figcaption><span>IRISTV OFFICIAL</span><strong>아리아 루멘의 첫 번째 기록</strong><button type="button">▶ 재생</button></figcaption></figure>` : ''}
    ${section.paragraphs?.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('') || ''}
    ${section.table ? dataTable(section.table) : ''}
  </section>`;

export const sidebar = ({ recent }) => `
  <aside class="sidebar">
    <section class="side-panel"><h2>실시간 갱신</h2><p><span class="status-dot"></span> 12명의 사용자가 문서를 보고 있습니다.</p></section>
    <section class="side-panel"><h2>최근 변경 <span>›</span></h2><ul>${recent.map((item, index) => `<li><a href="#section-${(index % 6) + 1}">${escapeHtml(item)}</a><time>${index * 7 + 3}분 전</time></li>`).join('')}</ul></section>
    <section class="promo"><span>IRISTV</span><strong>새로운 이야기를<br />기록하세요.</strong><a href="#overview">문서 둘러보기 →</a></section>
  </aside>`;
