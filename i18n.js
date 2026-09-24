/* CAIPEX 메인 사이트 다국어 사전 (한국어/영어/일본어) */
window.CAIPEX_I18N = {
  langs: [
    { code: 'en', label: 'English', emoji: '🇬🇧' },
    { code: 'ko', label: '한국어', emoji: '🇰🇷' },
    { code: 'ja', label: '日本語', emoji: '🇯🇵' }
  ],
  dict: {
    /* ── 공통 내비게이션 ── */
    'nav.about':        { en: 'About', ko: '소개', ja: '概要' },
    'nav.board':        { en: 'Board', ko: '게시판', ja: '掲示板' },
    'nav.publications': { en: 'Publications', ko: '발간물', ja: '刊行物' },
    'nav.events':       { en: 'Events', ko: '행사', ja: 'イベント' },
    'nav.members':      { en: 'Editors&Leadership', ko: '편집진·운영진', ja: '編集者·リーダーシップ' },
    'nav.contact':      { en: 'Contact', ko: '문의', ja: 'お問い合わせ' },
    'theme.system': { en: 'System mode', ko: '시스템 모드', ja: 'システムモード' },
    'theme.light':  { en: 'Light mode', ko: '라이트 모드', ja: 'ライトモード' },
    'theme.dark':   { en: 'Dark mode', ko: '다크 모드', ja: 'ダークモード' },
    'footer.copyright': { en: '© 2026 CAIPEX — Collegium of AI-Driven IP Examination Excellence', ko: '© 2026 CAIPEX — Collegium of AI-Driven IP Examination Excellence', ja: '© 2026 CAIPEX — Collegium of AI-Driven IP Examination Excellence' },
    'footer.disclaimer': {
      en: 'CAIPEX is an academic society. Content on this site is for scholarly and informational purposes only and has no legal or administrative effect.',
      ko: 'CAIPEX는 학술단체입니다. 본 사이트의 콘텐츠는 학술·정보 제공 목적이며 법적·행정적 효력이 없습니다.',
      ja: 'CAIPEXは学術団体です。本サイトのコンテンツは学術・情報提供を目的としており、法的・行政的効力はありません。'
    },

    /* ── index.html ── */
    'index.title': {
      en: 'The Future of AI-Enhanced<br>Intellectual Property Examination',
      ko: 'AI 강화 <br>지식재산 심사의 미래',
      ja: 'AI強化された<br>知的財産審査の未来'
    },
    'index.subtitle': {
      en: 'CAIPEX is an emerging international scholarly and professional forum dedicated to advancing excellence, reliability, transparency, and innovation in intellectual property examination quality through artificial intelligence, expert collaboration, and next-generation analytical methodologies.',
      ko: 'CAIPEX는 인공지능, 전문가 협업, 차세대 분석 방법론을 통해 지식재산 심사품질의 우수성·신뢰성·투명성·혁신을 높이는 데 전념하는 신흥 국제 학술·전문 포럼입니다.',
      ja: 'CAIPEXは、人工知能・専門家の協働・次世代の分析手法を通じて、知的財産審査品質の卓越性・信頼性・透明性・革新を高めることに取り組む新興の国際的な学術・専門フォーラムです。'
    },
    'index.researchTitle': { en: '📄 Latest Research (Sep 2026)', ko: '📄 최신 연구 (2026.09)', ja: '📄 最新研究 (2026年9月)' },
    'index.researchDesc': {
      en: '“Generative AI-Based Advancement of IP Examination Quality Diagnosis: Research & Construction Plan” — a neuro-symbolic PEQ architecture where AI structures evidence, a Rule Engine produces reproducible diagnostic candidates, and human diagnosticians make the final judgment.',
      ko: '「생성형 AI 기반 지식재산 심사품질 진단 고도화 연구·구축안」 — AI가 증거를 구조화하고, Rule Engine이 재현 가능한 진단후보를 만들고, 진단관이 최종 판단하는 뉴로심볼릭 PEQ 아키텍처를 제안합니다.',
      ja: '「生成AIベースの知的財産審査品質診断の高度化 研究·構築案」— AIが証拠を構造化し、ルールエンジンが再現可能な診断候補を生成し、診断官が最終判断を行うニューロシンボリックPEQアーキテクチャを提案します。'
    },
    'index.researchLink': { en: 'See details in Publications →', ko: 'Publications에서 자세히 보기 →', ja: 'Publicationsで詳細を見る →' },
    'index.f1.title': { en: 'AI & IP Examination Quality', ko: 'AI와 지식재산 심사품질', ja: 'AIと知財審査品質' },
    'index.f1.desc': {
      en: 'Evidence-grounded Agentic AI research for patent, trademark, and design examination — retrieve, verify, cite, and abstain when unsure.',
      ko: '특허·상표·디자인 심사를 위한 근거 기반 Agentic AI 연구 — 검색하고, 검증하고, 인용하며, 확신이 없으면 자제합니다.',
      ja: '特許・商標・意匠審査のための根拠に基づくAgentic AI研究 — 検索し、検証し、引用し、確信がなければ控えます。'
    },
    'index.f2.title': { en: 'Global Expert Network', ko: '글로벌 전문가 네트워크', ja: 'グローバル専門家ネットワーク' },
    'index.f2.desc': {
      en: 'Connecting examiners, scholars, attorneys, engineers, and policymakers across jurisdictions.',
      ko: '여러 관할권의 심사관·학자·변리사·엔지니어·정책 입안자를 연결합니다.',
      ja: '各法域の審査官・研究者・弁理士・エンジニア・政策立案者をつなぎます。'
    },
    'index.f3.title': { en: 'Excellence Frameworks', ko: '심사품질 우수성 프레임워크', ja: '審査品質の卓越性フレームワーク' },
    'index.f3.desc': {
      en: 'Evaluation standards, quality metrics, and human-in-the-loop best practices for consistent, trustworthy IP examination.',
      ko: '일관되고 신뢰할 수 있는 지식재산 심사를 위한 평가 기준, 품질 지표, 휴먼인더루프(HITL) 모범 사례를 개발합니다.',
      ja: '一貫性があり信頼できる知財審査のための評価基準、品質指標、ヒューマンインザループ(HITL)のベストプラクティスを開発します。'
    },

    /* ── about.html ── */
    'about.tag': { en: 'COLLEGIUM OF AI-DRIVEN IP EXAMINATION EXCELLENCE', ko: 'COLLEGIUM OF AI-DRIVEN IP EXAMINATION EXCELLENCE', ja: 'COLLEGIUM OF AI-DRIVEN IP EXAMINATION EXCELLENCE' },
    'about.title': {
      en: 'The Future of AI-Enhanced<br>Intellectual Property Examination',
      ko: 'AI 강화 지식재산 심사의 미래',
      ja: 'AI強化された知的財産審査の未来'
    },
    'about.subtitle': {
      en: 'CAIPEX is an emerging international scholarly and professional forum dedicated to advancing excellence, reliability, transparency, and innovation in intellectual property examination quality through artificial intelligence, expert collaboration, and next-generation analytical methodologies.',
      ko: 'CAIPEX는 인공지능, 전문가 협업, 차세대 분석 방법론을 통해 지식재산 심사품질의 우수성·신뢰성·투명성·혁신을 높이는 데 전념하는 신흥 국제 학술·전문 포럼입니다.',
      ja: 'CAIPEXは、人工知能・専門家の協働・次世代の分析手法を通じて、知的財産審査品質の卓越性・信頼性・透明性・革新を高めることに取り組む新興の国際的な学術・専門フォーラムです。'
    },

    /* ── contact.html ── */
    'contact.title': { en: 'Contact Us', ko: '문의하기', ja: 'お問い合わせ' },
    'contact.subtitle': {
      en: 'We welcome inquiries from researchers, examiners, and institutions worldwide.',
      ko: '전 세계 연구자, 심사관, 기관의 문의를 환영합니다.',
      ja: '世界中の研究者、審査官、機関からのお問い合わせを歓迎します。'
    },
    'contact.addressTitle': { en: 'Correspondence Address', ko: '서신 주소', ja: '連絡先住所' },
    'contact.address': {
      en: 'CAIPEX Secretariat<br>c/o MOIP International Cooperation Division<br>Daejeon, Republic of Korea',
      ko: 'CAIPEX 사무국<br>지식재산처 국제협력과 내<br>대한민국 대전',
      ja: 'CAIPEX事務局<br>MOIP国際協力課内<br>大韓民国 大田'
    },
    'contact.formName': { en: 'Your Name', ko: '이름', ja: 'お名前' },
    'contact.formNamePh': { en: 'Enter your full name', ko: '성명을 입력하세요', ja: '氏名を入力してください' },
    'contact.formEmail': { en: 'Your Email', ko: '이메일', ja: 'メールアドレス' },
    'contact.formEmailPh': { en: 'you@example.com', ko: 'you@example.com', ja: 'you@example.com' },
    'contact.formSubject': { en: 'Subject', ko: '제목', ja: '件名' },
    'contact.formSubjectPh': { en: 'How can we help?', ko: '무엇을 도와드릴까요?', ja: 'ご用件をお書きください' },
    'contact.formMessage': { en: 'Message', ko: '메시지', ja: 'メッセージ' },
    'contact.formMessagePh': { en: 'Write your message here...', ko: '메시지를 입력하세요...', ja: 'メッセージを入力してください...' },
    'contact.formSubmit': { en: 'Send Message (Available Soon)', ko: '메시지 보내기 (곧 제공)', ja: 'メッセージ送信 (近日提供)' },
    'contact.formNote': {
      en: 'The online contact form will be activated shortly. Please use the correspondence address above for inquiries.',
      ko: '온라인 문의 폼은 곧 활성화됩니다. 문의사항은 위 서신 주소로 연락해 주세요.',
      ja: 'オンラインお問い合わせフォームは近日有効になります。お問い合わせは上記の連絡先住所までお願いします。'
    },

    /* ── publications.html ── */
    'pub.title': { en: 'Publications & Archives', ko: '발간물·아카이브', ja: '刊行物·アーカイブ' },
    'pub.subtitle': {
      en: 'Journals, proceedings, and reports advancing AI-driven IP examination quality.',
      ko: 'AI 기반 지식재산 심사품질을 발전시키는 저널, 프로시딩, 연구보고서.',
      ja: 'AI駆動の知財審査品質を前進させるジャーナル、プロシーディング、研究報告書。'
    },
    'pub.soon': { en: 'PDF (Soon)', ko: 'PDF (곧 제공)', ja: 'PDF (近日公開)' },
    'pub.coming': { en: 'Coming', ko: '예정', ja: '近日公開' },
    'pub.v1i1.title': { en: 'CAIPEX Journal — Vol. 1, Issue 1', ko: 'CAIPEX 저널 — 제1권 제1호', ja: 'CAIPEXジャーナル — 第1巻第1号' },
    'pub.v1i1.meta': { en: 'Published: May 2026', ko: '발간: 2026년 5월', ja: '発行: 2026年5月' },
    'pub.v1i1.desc': {
      en: 'Inaugural issue focusing on foundational frameworks for AI-assisted patent examination.',
      ko: 'AI 지원 특허 심사의 기반 프레임워크를 다룬 창간호.',
      ja: 'AI支援特許審査の基盤フレームワークに焦点を当てた創刊号。'
    },
    'pub.v1i2.title': { en: 'CAIPEX Journal — Vol. 1, Issue 2', ko: 'CAIPEX 저널 — 제1권 제2호', ja: 'CAIPEXジャーナル — 第1巻第2号' },
    'pub.v1i2.meta': { en: 'Expected: November 2026', ko: '예정: 2026년 11월', ja: '予定: 2026年11月' },
    'pub.v1i2.desc': {
      en: 'Special issue on transparency and explainability in AI examination tools.',
      ko: 'AI 심사 도구의 투명성과 설명가능성을 다루는 특별호.',
      ja: 'AI審査ツールの透明性と説明可能性に関する特集号。'
    },
    'pub.proc.title': { en: 'CAIPEX 2026 Symposium Proceedings', ko: 'CAIPEX 2026 심포지엄 프로시딩', ja: 'CAIPEX 2026シンポジウムプロシーディング' },
    'pub.proc.meta': { en: 'September 2026', ko: '2026년 9월', ja: '2026年9月' },
    'pub.proc.desc': {
      en: 'Peer-reviewed papers from the first international CAIPEX symposium on IP examination quality.',
      ko: '지식재산 심사품질에 관한 제1회 국제 CAIPEX 심포지엄의 피어리뷰 논문집.',
      ja: '知財審査品質に関する第1回国際CAIPEXシンポジウムの査読付き論文集。'
    },
    'pub.report.title': { en: 'CAIPEX Research Report', ko: 'CAIPEX 연구보고서', ja: 'CAIPEX研究報告書' },
    'pub.report.meta': { en: 'September 2026', ko: '2026년 9월', ja: '2026年9月' },
    'pub.report.desc': {
      en: '“Generative AI-Based Advancement of IP Examination Quality Diagnosis: Research & Construction Plan” — neuro-symbolic PEQ, hybrid retrieval, evidence auditing, and human-in-the-loop quality assurance.',
      ko: '「생성형 AI 기반 지식재산 심사품질 진단 고도화 연구·구축안」 — 뉴로심볼릭 PEQ, 하이브리드 검색, 근거 검증, 휴먼인더루프 품질보증.',
      ja: '「生成AIベースの知財審査品質診断の高度化 研究·構築案」— ニューロシンボリックPEQ、ハイブリッド検索、証拠監査、ヒューマンインザループ品質保証。'
    },

    /* ── events.html ── */
    'event.title': { en: 'Events & Activities', ko: '행사·활동', ja: 'イベント·活動' },
    'event.subtitle': {
      en: 'International symposia, workshops, and webinars on AI-driven IP examination.',
      ko: 'AI 기반 지식재산 심사에 관한 국제 심포지엄, 워크숍, 웨비나.',
      ja: 'AI駆動の知財審査に関する国際シンポジウム、ワークショップ、ウェビナー。'
    },
    'event.past': { en: 'Past Event', ko: '지난 행사', ja: '過去のイベント' },
    'event.ongoing': { en: 'In Progress', ko: '진행 중', ja: '開催中' },
    'event.coming': { en: 'Coming', ko: '예정', ja: '近日公開' },
    'event.detailsSoon': { en: 'Details (Soon)', ko: '자세히 (곧 제공)', ja: '詳細 (近日公開)' },
    'event.registerSoon': { en: 'Register (Soon)', ko: '등록 (곧 제공)', ja: '登録 (近日公開)' },
    'event.e1.date': { en: 'April, 2026', ko: '2026년 4월', ja: '2026年4月' },
    'event.e1.title': { en: 'Workshop: AI Explainability in Patent Examination', ko: '워크숍: 특허 심사에서의 AI 설명가능성', ja: 'ワークショップ: 特許審査におけるAIの説明可能性' },
    'event.e1.loc': { en: 'Daejeon, Korea (Hybrid)', ko: '대전, 대한민국 (하이브리드)', ja: '大田, 韓国 (ハイブリッド)' },
    'event.e1.desc': {
      en: 'A hands-on workshop for patent examiners and IP professionals focusing on interpretable AI systems and quality metrics.',
      ko: '특허 심사관과 지식재산 전문가를 대상으로 해석 가능한 AI 시스템과 품질 지표를 다루는 실습 워크숍.',
      ja: '特許審査官と知財専門家を対象に、解釈可能なAIシステムと品質指標に焦点を当てた実践ワークショップ。'
    },
    'event.e2.date': { en: 'May, 2026', ko: '2026년 5월', ja: '2026年5月' },
    'event.e2.title': { en: 'Training: AI Development for Patent Examination Quality', ko: '교육: 특허 심사품질을 위한 AI 개발', ja: '研修: 特許審査品質のためのAI開発' },
    'event.e2.loc': { en: 'Offline, MOIP office, Korea Gov. Complex', ko: '오프라인, 지식재산처 정부대전청사', ja: 'オフライン, MOIP事務所 (政府大田庁舎)' },
    'event.e2.desc': {
      en: 'A hands-on training course addressing the limitations of commercial LLM models and developing RAG (Retrieval-Augmented Generation) solutions for IP examination.',
      ko: '상용 LLM 모델의 한계를 다루고 지식재산 심사를 위한 RAG(검색증강생성) 솔루션을 개발하는 실습 교육 과정.',
      ja: '商用LLMモデルの限界に対処し、知財審査のためのRAG(検索拡張生成)ソリューションを開発する実践研修コース。'
    },
    'event.e3.date': { en: 'May – August, 2026', ko: '2026년 5월 – 8월', ja: '2026年5月 – 8月' },
    'event.e3.title': { en: 'EQ AI Contest: Practical AI Development for Examination Quality', ko: 'EQ AI 콘테스트: 심사품질을 위한 실전 AI 개발', ja: 'EQ AIコンテスト: 審査品質のための実践AI開発' },
    'event.e3.loc': { en: 'Online & On-site', ko: '온라인·오프라인', ja: 'オンライン·オンサイト' },
    'event.e3.desc': {
      en: 'An ongoing AI development contest organized by the Examination Quality (EQ) Research Group. Participants apply skills from the AI training course to solve real-world patent examination challenges.',
      ko: '심사품질(EQ) 연구회가 주최하는 AI 개발 콘테스트. 참가자들은 AI 교육 과정에서 배운 기술을 실제 특허 심사 문제 해결에 적용합니다.',
      ja: '審査品質(EQ)研究会が主催するAI開発コンテスト。参加者はAI研修コースで学んだ技術を実際の特許審査課題の解決に応用します。'
    },
    'event.e4.date': { en: 'October, 2026', ko: '2026년 10월', ja: '2026年10月' },
    'event.e4.title': { en: 'IP Examination Roundtable', ko: '지식재산 심사 라운드테이블', ja: '知財審査ラウンドテーブル' },
    'event.e4.loc': { en: 'Daejeon, Korea', ko: '대전, 대한민국', ja: '大田, 韓国' },
    'event.e4.desc': {
      en: 'A high-level policy dialogue with IP office representatives, academics, and industry stakeholders on harmonizing examination practices.',
      ko: '지식재산청 대표, 학계, 산업계 이해관계자가 참여하여 심사 관행의 조화를 논의하는 고위급 정책 대화.',
      ja: '知財庁の代表、学界、産業界の関係者が参加し、審査慣行の調和について議論するハイレベル政策対話。'
    },
    'event.more': {
      en: 'More events will be announced soon.<br>Subscribe to stay updated on upcoming CAIPEX activities.',
      ko: '더 많은 행사가 곧 공지될 예정입니다.<br>향후 CAIPEX 활동 소식을 놓치지 마세요.',
      ja: '今後さらに多くのイベントが発表される予定です。<br>CAIPEXの今後の活動をお見逃しなく。'
    },

    /* ── members.html ── */
    'member.title': { en: 'Editors & Leadership', ko: '편집진·운영진', ja: '編集者·リーダーシップ' },
    'member.subtitle': {
      en: 'The scholars, examiners, and professionals driving CAIPEX forward.',
      ko: 'CAIPEX를 이끌어가는 학자, 심사관, 전문가들.',
      ja: 'CAIPEXを前進させる研究者、審査官、専門家たち。'
    },
    'member.note': { en: 'Listed in alphabetical order by last name.', ko: '성(Last Name) 알파벳순으로 나열되었습니다.', ja: '姓のアルファベット順に掲載しています。' },
    'member.more': {
      en: 'More editors and contributors joining soon.<br>CAIPEX continues to expand its network of experts and contributors.',
      ko: '더 많은 편집진과 기고자가 합류할 예정입니다.<br>CAIPEX는 전문가·기고자 네트워크를 계속 확장하고 있습니다.',
      ja: 'さらに多くの編集者と寄稿者が参加予定です。<br>CAIPEXは専門家・寄稿者のネットワークを拡大し続けています。'
    },
    'member.role1':  { en: 'Examination Quality Evaluator & Patent Attorney', ko: '심사품질평가관·변리사', ja: '審査品質評価官·弁理士' },
    'member.role2':  { en: 'Examination Quality Evaluator', ko: '심사품질평가관', ja: '審査品質評価官' },
    'member.role3':  { en: 'Education & Outreach', ko: '교육·대외협력', ja: '教育·アウトリーチ' },
    'member.role4':  { en: 'Lawyer', ko: '변호사', ja: '弁護士' },
    'member.role5':  { en: 'Patent Examiner', ko: '특허심사관', ja: '特許審査官' },
    'member.role6':  { en: 'Patent Judge', ko: '특허심판원 판사', ja: '特許裁判官' },
    'member.role7':  { en: 'Trademark & Design Examiner', ko: '상표·디자인 심사관', ja: '商標·意匠審査官' },
    'member.role8':  { en: 'Director of Examination Quality Evaluation', ko: '심사품질평가 국장', ja: '審査品質評価ディレクター' },
    'member.role9':  { en: 'Examination Quality Evaluator / Trademark-Design Examiner', ko: '심사품질평가관·상표디자인 심사관', ja: '審査品質評価官·商標意匠審査官' },
    'member.aff.moip': { en: 'Ministry of Intellectual Property (MOIP)', ko: '지식재산처(MOIP)', ja: '知的財産庁 (MOIP)' },
    'member.aff.iptab': { en: 'Intellectual Property Trial and Appeal Board (IPTAB)', ko: '특허심판원(IPTAB)', ja: '特許審判院 (IPTAB)' },
    'member.aff.moipTD': { en: 'Ministry of Intellectual Property (MOIP), Trademark and Design Examination Bureau', ko: '지식재산처(MOIP) 상표디자인심사국', ja: '知的財産庁 (MOIP) 商標意匠審査局' },
    'member.aff.plus': { en: 'PLUS International IP Law Firm', ko: 'PLUS 국제특허법률사무소', ja: 'PLUS国際知財法律事務所' },
    'member.aff.bebegoods': { en: 'CEO, Bebegoods Montessori', ko: '베베굿즈 몬테소리 대표', ja: 'ベベグッズ・モンテッソーリ CEO' },
    'member.bio1':  { en: 'Majored in Chemistry. Certified Patent Attorney.', ko: '화학 전공. 변리사.', ja: '化学専攻。弁理士。' },
    'member.bio2':  { en: 'Majored in Chemical Engineering, Bioinformatics, Doctor Philosophiae. Novelist.', ko: '화학공학·생명정보학 전공, 이학박사. 소설가.', ja: '化学工学·バイオインフォマティクス専攻、理学博士。小説家。' },
    'member.bio3':  { en: 'Majored in Child, Family and Humanities. Professor of Montessori education and Instructor at teacher training institutes. Brings expertise in Education & Psychology to CAIPEX.', ko: '아동·가족·인문학 전공. 몬테소리 교육 교수 및 교사 연수 강사. 교육·심리 전문성을 CAIPEX에 기여.', ja: '児童·家族·人文学専攻。モンテッソーリ教育教授、教員研修講師。教育·心理の専門性をCAIPEXに提供。' },
    'member.bio4':  { en: 'Majored in Polymer Materials, Nanomaterials, Secondary Batteries, and Polymer Processing. Licensed Attorney at Law. Provides legal advisory services to CAIPEX.', ko: '고분자재료·나노소재·이차전지·고분자가공 전공. 변호사. CAIPEX 법률 자문 제공.', ja: '高分子材料·ナノ材料·二次電池·高分子加工専攻。弁護士。CAIPEXに法的助言を提供。' },
    'member.bio5':  { en: 'Majored in Chemistry, Secondary Batteries, Biotechnology. Specialized in Medical Technology.', ko: '화학·이차전지·생명공학 전공. 의료기술 전문.', ja: '化学·二次電池·バイオテクノロジー専攻。医療技術を専門。' },
    'member.bio6':  { en: 'Majored in Architecture and Mechanics. Former Examination Quality Evaluator.', ko: '건축·역학 전공. 전 심사품질평가관.', ja: '建築·力学専攻。元審査品質評価官。' },
    'member.bio7':  { en: 'Majored in Chemical Engineering. Former Examination Quality Evaluator.', ko: '화학공학 전공. 전 심사품질평가관.', ja: '化学工学専攻。元審査品質評価官。' },
    'member.bio8':  { en: 'Ph.D. in Physics.', ko: '물리학 박사.', ja: '物理学博士。' },
    'member.bio9':  { en: 'Majored in Electrical, Electronic, and Communication Engineering.', ko: '전기·전자·통신공학 전공.', ja: '電気·電子·通信工学専攻。' },
    'member.bio10': { en: 'Majored in Electrical, Electronic, and Communication Engineering. Specialized in Smart Manufacturing.', ko: '전기·전자·통신공학 전공. 스마트제조 전문.', ja: '電気·電子·通信工学専攻。スマート製造を専門。' },
    'member.bio11': { en: 'Ph.D. in Engineering, specializing in antenna technology.', ko: '공학박사, 안테나 기술 전문.', ja: '工学博士、アンテナ技術を専門。' },
    'member.bio12': { en: 'Majored in Mechanical Engineering. Certified Patent Attorney.', ko: '기계공학 전공. 변리사.', ja: '機械工学専攻。弁理士。' },
    'member.bio13': { en: 'Majored in Architecture.', ko: '건축 전공.', ja: '建築専攻。' },
    'member.bio14': { en: 'Majored in Architecture and Law. Also serves as a Trademark and Design Examiner.', ko: '건축·법학 전공. 상표·디자인 심사관 겸직.', ja: '建築·法学専攻。商標·意匠審査官も兼任。' },

    /* ── CAIPEX 연구 체험 섹션 ── */
    'research.sectionTitle': {
      en: 'CAIPEX Research Experience',
      ko: 'CAIPEX 연구 체험',
      ja: 'CAIPEXリサーチ体験'
    },
    'research.sectionIntro': {
      en: 'Explore the research questions and designs in person — investigate future possibilities through fictional cases and simulations.',
      ko: '연구의 질문과 설계를 직접 살펴보고, 가상 사례와 시뮬레이션으로 미래의 가능성을 탐색해 보세요.',
      ja: '研究の問いと設計を直接ご覧いただき、架空事例とシミュレーションで未来の可能性を探ってみてください。'
    },
    'research.card1.tag': { en: 'IP EXAMINATION QUALITY', ko: 'IP EXAMINATION QUALITY', ja: 'IP EXAMINATION QUALITY' },
    'research.card1.title': {
      en: 'The Future of Examination Quality, Following the Evidence',
      ko: '근거를 따라가는 심사품질의 미래',
      ja: '根拠をたどる審査品質の未来'
    },
    'research.card1.desc': {
      en: 'Experience examination-quality diagnosis research that walks through a fictional case: from gathering case materials and reviewing source-linked evidence, to explicit rule evaluation, UNKNOWN handling, and final human review.',
      ko: '가상 사건의 자료와 원문 근거를 확인하고, 규칙 평가와 UNKNOWN 처리, 사람의 최종 검토까지 이어지는 심사품질 진단 연구를 체험합니다.',
      ja: '架空事件の資料と原文根拠を確認し、ルール評価とUNKNOWN処理、人の最終レビューまで続く審査品質診断の研究を体験します。'
    },
    'research.card1.keywords': {
      en: 'Evidence tracking · Rule evaluation · Human review',
      ko: '근거 추적 · 규칙 평가 · 사람의 검토',
      ja: '根拠追跡 · ルール評価 · 人のレビュー'
    },
    'research.card2.tag': { en: 'LAYERED AI · ASTRA', ko: 'LAYERED AI · ASTRA', ja: 'LAYERED AI · ASTRA' },
    'research.card2.title': {
      en: 'Personas Journeying Through Layered AI',
      ko: '계층형 AI와 여행하는 페르소나',
      ja: '階層型AIと旅するペルソナ'
    },
    'research.card2.desc': {
      en: 'Configure layered functions and multiple personas, then explore — through simulation — how limited personas navigate virtual environments and how their homecoming experiences are verified and curated.',
      ko: '계층형 기능과 다중 페르소나를 구성하고, 가상 환경 탐색과 귀환 경험의 검증 과정을 시뮬레이션으로 살펴봅니다.',
      ja: '階層型機能と複数のペルソナを構成し、仮想環境の探索と帰還体験の検証プロセスをシミュレーションで観察します。'
    },
    'research.card2.keywords': {
      en: 'Layered architecture · Multi-persona · Research simulation',
      ko: '계층형 구조 · 다중 페르소나 · 연구 시뮬레이션',
      ja: '階層構造 · マルチペルソナ · 研究シミュレーション'
    },
    'research.tryButton': {
      en: 'Try the research ↗',
      ko: '연구 체험하기 ↗',
      ja: '研究を体験する ↗'
    },
    'research.openNewTab': {
      en: '(opens in a new tab)',
      ko: '(새 탭에서 열림)',
      ja: '(新しいタブで開きます)'
    },
    'research.disclaimer': {
      en: 'The experiences on these sites are fictional cases or simulations created to explain research concepts. They do not represent actual examination decisions or measured research results. “Layers” and “personas” are functional design concepts — not claims about AI consciousness or emotion.',
      ko: '각 사이트의 체험은 연구 개념을 설명하기 위한 가상 사례 또는 시뮬레이션입니다. 실제 심사 판단이나 실측 연구 성과를 의미하지 않습니다. ‘계층’과 ‘페르소나’는 기능적 설계 개념이며, AI의 의식이나 감정을 뜻하지 않습니다.',
      ja: '各サイトの体験は、研究コンセプトを説明するための架空事例またはシミュレーションです。実際の審査判断や実測の研究成果を示すものではありません。「階層」と「ペルソナ」は機能的な設計概念であり、AIの意識や感情を意味するものではありません。'
    },

    /* ── 메타 ── */
    'meta.about': { en: 'CAIPEX - About — Collegium of AI-Driven IP Examination Excellence', ko: 'CAIPEX - 소개 — Collegium of AI-Driven IP Examination Excellence', ja: 'CAIPEX - 概要 — Collegium of AI-Driven IP Examination Excellence' },
    'meta.contact': { en: 'CAIPEX — Contact', ko: 'CAIPEX — 문의', ja: 'CAIPEX — お問い合わせ' },
    'meta.publications': { en: 'CAIPEX — Publications', ko: 'CAIPEX — 발간물', ja: 'CAIPEX — 刊行物' },
    'meta.events': { en: 'CAIPEX — Events', ko: 'CAIPEX — 행사', ja: 'CAIPEX — イベント' },
    'meta.members': { en: 'CAIPEX — Editors & Leadership', ko: 'CAIPEX — 편집진·운영진', ja: 'CAIPEX — 編集者·リーダーシップ' }
  }
};
