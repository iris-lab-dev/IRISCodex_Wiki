const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
const documentPath = (title) => `/c/${encodeURIComponent(title)}/`;
const homePath = documentPath('아이리스도감:대문');

export const wikiHeader = ({ brand }) => `
  <header class="site-header">
    <a class="brand" href="${homePath}" aria-label="${escapeHtml(brand.name)} 홈"><span class="brand-mark">${escapeHtml(brand.mark)}</span><strong>${escapeHtml(brand.name)}</strong></a>
    <nav class="header-nav" aria-label="주요 메뉴"><a href="${homePath}">문서</a><a href="#recent">최근 변경</a><a href="#guide">도움말</a></nav>
    <form class="search-form" role="search"><input type="search" placeholder="아이리스도감에서 검색" aria-label="문서 검색" /><button type="submit" aria-label="검색">⌕</button></form>
    <button class="account-button" type="button" aria-label="사용자 메뉴">●</button>
  </header>`;

export const guideList = ({ guides }) => `
  <section class="guide-list" id="guide" aria-label="도감 이용 안내">
    ${guides.map((guide) => `<article class="guide-item"><span class="guide-icon" aria-hidden="true">${escapeHtml(guide.icon)}</span><div><h2>${escapeHtml(guide.title)}</h2><p>${escapeHtml(guide.description)}</p><div class="guide-links">${guide.links.map((link) => `<a href="#popular">${escapeHtml(link)}</a>`).join('')}</div></div></article>`).join('')}
  </section>`;

export const popularTable = ({ popular }) => `
  <section class="popular-section" id="popular"><div class="section-title"><h2>인기 문서</h2><a href="#recent">더 보기 ›</a></div><table><thead><tr><th>문서</th><th>설명</th></tr></thead><tbody>${popular.map(([title, description]) => `<tr><th scope="row"><a href="${documentPath(title)}">${escapeHtml(title)}</a></th><td>${escapeHtml(description)}</td></tr>`).join('')}</tbody></table></section>`;

export const sidebar = ({ recent }) => `
  <aside class="sidebar">
    <section class="side-panel live-panel"><h2>실시간 검색어</h2><ol><li><span>1</span><a href="${documentPath('IRISTV')}">IRISTV</a></li><li><span>2</span><a href="${documentPath('아리아 루멘')}">아리아 루멘</a></li><li><span>3</span><a href="${documentPath('노바 세린')}">노바 세린</a></li></ol></section>
    <section class="side-panel" id="recent"><h2>최근 변경 <a href="#recent" aria-label="최근 변경 더 보기">›</a></h2><ul>${recent.map((item, index) => `<li><a href="${documentPath(item)}">${escapeHtml(item)}</a><time>${index * 7 + 3}분 전</time></li>`).join('')}</ul></section>
    <section class="promo"><span>IRISTV CODEX</span><strong>모든 이야기를<br />기록하세요.</strong><p>함께 만드는 아이리스도감</p><a href="#guide">도감 시작하기 →</a></section>
  </aside>`;

export const affiliationCard = ({ affiliation }) => `
  <section class="affiliation-card"><div class="affiliation-title"><span class="orb">✦</span><div><strong>${escapeHtml(affiliation.title)}</strong><small>${escapeHtml(affiliation.subtitle)}</small></div></div><div class="affiliation-links">${affiliation.links.map((link) => `<a href="#related">${escapeHtml(link)}</a>`).join('')}</div></section>`;

export const profileCard = ({ profile }) => `
  <aside class="profile-card"><div class="profile-heading"><div><span>IRISTV CREATOR</span><h2>${escapeHtml(profile.name)}</h2><p>${escapeHtml(profile.enName)}</p></div><i>✦</i></div><img class="profile-image" src="${profile.image}" alt="${escapeHtml(profile.name)}의 일러스트" /><p class="profile-tagline">${escapeHtml(profile.tagline)}</p><h3>PROFILE</h3><dl class="profile-list">${profile.rows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl><h3>SOCIAL</h3><dl class="profile-list">${profile.social.map(({ label, value }) => `<div><dt>${escapeHtml(label)}</dt><dd><a href="#related">${escapeHtml(value)}</a></dd></div>`).join('')}</dl></aside>`;

export const tableOfContents = ({ toc }) => `<aside class="toc is-open"><button class="toc-toggle" type="button" aria-expanded="true">목차 <span>⌄</span></button><ol>${toc.map((title, index) => `<li><a href="#section-${index + 1}"><b>${index + 1}.</b> ${escapeHtml(title)}</a></li>`).join('')}</ol></aside>`;

const dataTable = (rows) => `<div class="data-table"><table><tbody>${rows.map((row) => `<tr>${row.map((cell, index) => `<${index === 0 ? 'th scope="row"' : 'td'}>${escapeHtml(cell)}</${index === 0 ? 'th' : 'td'}>`).join('')}</tr>`).join('')}</tbody></table></div>`;

export const wikiSection = ({ section, index }) => `
  <section class="wiki-section" id="section-${index}"><h2><a href="#section-${index}">${index}. ${escapeHtml(section.title)}</a></h2>${section.lead ? `<p class="lead">${escapeHtml(section.lead)}</p>` : ''}${section.media ? `<figure class="media-card"><img src="/assets/images/iris-aria.svg" alt="아리아 루멘의 데뷔 방송 영상 미리보기" /><figcaption><span>IRISTV OFFICIAL</span><strong>아리아 루멘의 첫 번째 기록</strong><button type="button">▶ 재생</button></figcaption></figure>` : ''}${section.paragraphs?.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('') || ''}${section.table ? dataTable(section.table) : ''}</section>`;
