const languageSelect = document.getElementById('language-select');
const defaultText = new Map([...document.querySelectorAll('[data-i18n]')].map((element) => [element, element.textContent]));
const defaultHtml = new Map([...document.querySelectorAll('[data-i18n-html]')].map((element) => [element, element.innerHTML]));
const defaultAttributes = new Map(
  [...document.querySelectorAll('[data-i18n-aria-label], [data-i18n-placeholder], [data-i18n-alt]')].map((element) => [
    element,
    {
      ariaLabel: element.getAttribute('aria-label'),
      placeholder: element.getAttribute('placeholder'),
      alt: element.getAttribute('alt')
    }
  ])
);

const translations = {
  en: {
    pageTitle: 'Octopus TOPIK | Learn with fun, reach your goal',
    pageDescription: 'Complete short, fun TOPIK missions every day, earn points, and unlock detailed feedback for Question 54.',
    skip: 'Skip to main content', navLabel: 'Main menu', navProblem: 'Study challenges', navSolution: 'How you grow', navFeatures: 'Features', navProcess: 'How it works',
    cta: 'Apply for a free trial', languageLabel: 'Choose language', menuOpen: 'Open menu', menuClose: 'Close menu', closeAlert: 'Close notification',
    heroEyebrow: 'TOPIK learning where progress replaces boring memorization',
    heroTitle: 'One step every day,<br>toward your <strong>TOPIK goal.</strong>',
    heroDescription: 'Enjoy short vocabulary, reading, and Question 53 missions while earning points. Use them for detailed Question 54 feedback, find what you missed, rewrite, and move closer to your goal.',
    viewProcess: 'See how it works', heroStatsLabel: 'The Octopus TOPIK growth experience',
    statMission: "Today's mission", statMissionDesc: 'Short and fun', statPoints: 'Growth points', statPointsDesc: 'Consistency gets rewarded', statFeedback: 'Detailed Q54 feedback', statFeedbackDesc: 'See your exact weaknesses',
    illustrationMission: "Today's mission", illustrationPoints: 'Growth points', illustrationFeedback: 'Detailed feedback', illustrationCaption: 'One step at a time toward your goal with AI tutor Octo', heroImageAlt: 'AI tutor Octo connects daily missions and growth points to detailed writing feedback',
    problemLabel: 'Learner challenges · Pain Point', problemTitle: 'You study hard—so why does your score stay the same?', problemIntro: 'Solving questions alone makes it hard to see what improved and what needs fixing.',
    problem1Title: "You can't see why you were wrong", problem1Desc: 'Answers and scores alone do not show which ideas or sentences you need to change.',
    problem2Title: 'Writing feedback is hard to get often', problem2Desc: 'Repeated feedback helps you grow, but paying every time can be expensive.',
    problem3Title: 'Study habits do not last', problem3Desc: 'Even with a clear goal, repeating the same questions every day quickly becomes tiring.',
    solutionLabel: 'The Octopus growth loop · Solution', solutionTitle: 'Start with fun. Finish with real progress.', solutionIntro: 'Small wins build consistency, and consistency leads to clear feedback and better rewrites.',
    solution1Title: "Start easily with today's mission", solution1Desc: 'Vocabulary, reading, and Question 53 become short daily missions you can take on without pressure.',
    solution2Title: 'Earn growth points as you learn', solution2Desc: 'Every completed mission adds points and a sense of progress that helps you keep going.',
    solution3Title: 'Find weaknesses and rewrite', solution3Desc: 'Unlock detailed Question 54 feedback with points, learn why you lost marks, and write again.',
    featuresLabel: 'Tools for daily growth · Core Features', featuresTitle: 'A TOPIK routine you will want to return to', featuresIntro: 'Short challenges, visible growth, and clear feedback keep learning enjoyable.',
    feature1Title: "Today's vocabulary quest", feature1Desc: 'Learn one high-frequency TOPIK word at a time through quick daily questions.',
    feature2Title: 'Reading weakness map', feature2Desc: 'Group mistakes by type and see the reading patterns you often miss.',
    feature3Title: 'Question 53 writing challenge', feature3Desc: 'Find the key points in a graph, complete your answer, and revise it with instant basic feedback.',
    feature4Title: 'Detailed Question 54 feedback', feature4Desc: 'Analyze content, logic, structure, grammar, and vocabulary to improve your next answer.',
    processLabel: 'Your growth path · How it works', processTitle: 'Three steps to your target level', processIntro: "From today's small challenge to rewriting Question 54, your next step is always clear.",
    step1Title: 'Take on a short mission', step1Desc: "Start lightly with today's vocabulary, reading, and Question 53 missions.",
    step2Title: 'Build achievements and points', step2Desc: 'As completed missions grow, your study habit and in-service points grow together.',
    step3Title: 'Get feedback and rewrite', step3Desc: 'Use points for detailed Question 54 feedback and complete a stronger answer.',
    rewardLabel: 'Reward for consistency · Reward Loop', rewardTitle: "Today's missions become<br>Question 54 feedback", rewardIntro: 'Each study session opens the next step.', todayPoints: "Today's points",
    journeyMission: 'Mission', journeyPoints: 'Points', journeyFeedback: 'Feedback', journeyGrowth: 'Growth',
    benefitsLabel: 'Changes you can expect · Expected Effect', benefitsTitle: 'A little every day.<br>Clear progress over time.', benefitsIntro: 'The moment you identify a weakness and rewrite, studying becomes growth.',
    growthMission: "Today's mission", growthAnswer: 'A better answer', growthGoal: 'Target level', benefitWeakness: 'Find weaknesses', benefitRewrite: 'Rewrite', benefitChange: 'See the change',
    audienceLabel: 'Recommended for · For You', audienceTitle: 'You and Octo<br>will make a great team',
    audience1: 'Aiming for<br>TOPIK II Levels 4–6', audience2: 'Studying but<br>feeling stuck', audience3: 'Curious about<br>writing deductions', audience4: 'Needing a fun<br>study habit',
    faqLabel: 'Frequently asked questions · FAQ', faqTitle: 'Frequently asked questions',
    faq1Q: 'What can I use my points for?', faq1A: 'Points earned through learning can be used for detailed Question 54 feedback and additional study features.',
    faq2Q: 'How does it help me study consistently?', faq2A: 'Vocabulary, reading, and Question 53 are divided into short missions. Complete them to earn in-service points, unlock Question 54 feedback, and set your next goal.',
    faq3Q: 'Is the score an official TOPIK score?', faq3A: 'No. Scores and analysis are learning estimates and do not guarantee an official exam result.',
    faq4Q: 'What can I experience in the free trial?', faq4A: 'Experience the learning flow from vocabulary, reading, and writing missions to points and detailed Question 54 feedback. Trial dates and instructions will be shared with applicants.',
    trialLabel: 'Free trial · Start Today', trialTitle: 'TOPIK study you struggled with alone<br>changes today', trialIntro: 'Start easily, keep going with fun, and see how your answers change. We will send free-trial applicants the schedule and instructions.',
    trialPoint1: 'Light daily TOPIK missions', trialPoint2: 'Learning points that reward consistency', trialPoint3: 'Detailed Question 54 feedback that reveals weaknesses',
    nicknameLabel: 'Name or nickname', nicknamePlaceholder: 'e.g. Mina', emailLabel: 'Email', currentLevelLabel: 'Current level', targetLevelLabel: 'Target level', unknown: "I don't know", selectOption: 'Select',
    privacyNote: 'Your information is saved only in this browser and is not sent to an external server.', footerTagline: 'A TOPIK learning service that turns small daily wins into your target level', footerAbout: 'About the service',
    modalLabel: 'Application saved', modalTitle: 'Your first step toward<br>your target level starts now!', confirm: 'OK',
    errorNickname: 'Please enter your name or nickname.', errorEmailRequired: 'Please enter your email.', errorEmailInvalid: 'Please enter a valid email address.', errorTarget: 'Please select your target level.',
    confirmReplace: 'An application with this email is already saved. Replace it with the new information?', storageError: 'Browser storage is unavailable. Check your settings and try again.',
    successNew: 'Your free-trial application was saved in this browser. It was not sent to a server.', successReplace: 'Your application was updated in this browser.'
  },
  zh: {
    pageTitle: 'Octopus TOPIK | 每天轻松学，迈向目标等级',
    pageDescription: '每天完成轻松有趣的TOPIK任务，积累积分，解锁54题精细批改。',
    skip: '跳到主要内容', navLabel: '主菜单', navProblem: '学习烦恼', navSolution: '成长方式', navFeatures: '核心功能', navProcess: '使用流程',
    cta: '申请免费体验', languageLabel: '选择语言', menuOpen: '打开菜单', menuClose: '关闭菜单', closeAlert: '关闭提示',
    heroEyebrow: '告别枯燥背诵，看得见成长的TOPIK学习',
    heroTitle: '每天前进一步，<br>直到<strong>理想的TOPIK等级。</strong>',
    heroDescription: '通过词汇、阅读和53题短任务轻松学习并积累积分。用积分解锁54题精细批改，发现弱点、重新作答，一步步接近目标。',
    viewProcess: '查看使用流程', heroStatsLabel: 'Octopus TOPIK成长体验',
    statMission: '今日任务', statMissionDesc: '轻松又有趣', statPoints: '成长积分', statPointsDesc: '坚持就有回报', statFeedback: '54题精细批改', statFeedbackDesc: '具体找到弱点',
    illustrationMission: '今日任务', illustrationPoints: '成长积分', illustrationFeedback: '精细批改', illustrationCaption: '与AI导师Octo一起，一步步迈向目标等级', heroImageAlt: 'AI导师Octo把今日任务、成长积分和写作精细批改连接起来',
    problemLabel: '学习者的烦恼 · Pain Point', problemTitle: '明明一直在学，为什么实力没有变化？', problemIntro: '独自刷题时，很难知道自己进步了什么、还需要改什么。',
    problem1Title: '看不出错误原因', problem1Desc: '只看答案和分数，无法知道应该改变哪些思路和句子。',
    problem2Title: '难以经常获得写作反馈', problem2Desc: '提升实力需要反复批改，但每次付费会带来负担。',
    problem3Title: '学习习惯难以坚持', problem3Desc: '即使目标明确，每天重复同样的题目也很容易疲惫。',
    solutionLabel: 'Octopus成长循环 · Solution', solutionTitle: '快乐开始，以真正的进步收尾', solutionIntro: '小任务的成就感带来坚持，坚持又连接到具体反馈和重新写作。',
    solution1Title: '从今日任务轻松开始', solution1Desc: '把词汇、阅读和53题分成短任务，每天无压力挑战。',
    solution2Title: '越学越多的成长积分', solution2Desc: '每完成一个任务，积分和成就都会增加，给你继续学习的动力。',
    solution3Title: '发现弱点并重新写作', solution3Desc: '用积分解锁54题精细批改，查看扣分原因和修改方向后再次作答。',
    featuresLabel: '每日成长工具 · Core Features', featuresTitle: '让你每天都想回来的TOPIK学习习惯', featuresIntro: '短挑战、看得见的成长和具体反馈，让学习乐趣持续下去。',
    feature1Title: '今日词汇任务', feature1Desc: '用短题练习TOPIK高频词汇，每天掌握一个。',
    feature2Title: '阅读弱点地图', feature2Desc: '按题型整理错题，一眼看出自己常错的阅读模式。',
    feature3Title: '53题写作挑战', feature3Desc: '找出图表重点、完成答案，并根据基础反馈立即修改。',
    feature4Title: '54题精细批改', feature4Desc: '从内容、逻辑、结构、语法和词汇多方面分析，为下一篇答案找到方向。',
    processLabel: '成长过程 · How it works', processTitle: '迈向目标等级的三个步骤', processIntro: '从今天的小挑战到54题重写，下一步始终清晰。',
    step1Title: '挑战短任务', step1Desc: '从今日词汇、阅读和53题任务轻松开始。',
    step2Title: '积累成就与积分', step2Desc: '完成的任务越多，学习习惯和服务内积分一起增长。',
    step3Title: '获得批改并重写', step3Desc: '用积分体验54题精细批改，结合弱点完成更好的答案。',
    rewardLabel: '坚持的奖励 · Reward Loop', rewardTitle: '今日任务<br>变成54题批改', rewardIntro: '学得越多，下一阶段开启得越多。', todayPoints: '今日积分',
    journeyMission: '任务', journeyPoints: '积分', journeyFeedback: '批改', journeyGrowth: '成长',
    benefitsLabel: '可以期待的变化 · Expected Effect', benefitsTitle: '每天进步一点，<br>实力清晰可见。', benefitsIntro: '发现弱点并重新写作的瞬间，学习就会变成成长。',
    growthMission: '今日任务', growthAnswer: '更好的答案', growthGoal: '目标等级', benefitWeakness: '发现弱点', benefitRewrite: '重新写作', benefitChange: '确认变化',
    audienceLabel: '推荐给这样的你 · For You', audienceTitle: '和Octo一起学习<br>会很适合你',
    audience1: '目标为TOPIK II<br>4～6级', audience2: '一直学习<br>却停滞不前', audience3: '想知道写作<br>扣分原因', audience4: '需要有趣的<br>学习习惯',
    faqLabel: '常见问题 · FAQ', faqTitle: '常见问题',
    faq1Q: '积累的积分可以怎么使用？', faq1A: '学习获得的积分可用于54题精细批改和其他学习功能。',
    faq2Q: '如何帮助我坚持学习？', faq2A: '词汇、阅读和53题被分成短任务。完成后获得服务内积分，用于54题精细批改，并建立下一个目标。',
    faq3Q: '提供的分数是TOPIK官方分数吗？', faq3A: '不是。服务提供的是用于学习的预估分数和分析，不保证官方考试结果。',
    faq4Q: '免费体验包含什么？', faq4A: '你可以体验从词汇、阅读、写作任务到积分和54题精细批改的完整学习流程。体验日程和方法将另行通知。',
    trialLabel: '免费体验 · Start Today', trialTitle: '曾经独自烦恼的TOPIK学习，<br>从今天开始改变', trialIntro: '轻松开始、有趣坚持，并亲眼看到答案的变化。我们会向申请者介绍免费体验的日程和方法。',
    trialPoint1: '每天轻松挑战的TOPIK任务', trialPoint2: '奖励坚持的学习积分', trialPoint3: '找出弱点的54题精细批改',
    nicknameLabel: '姓名或昵称', nicknamePlaceholder: '例如：小明', emailLabel: '电子邮箱', currentLevelLabel: '当前等级', targetLevelLabel: '目标等级', unknown: '不知道', selectOption: '请选择',
    privacyNote: '输入内容只保存在此浏览器中，不会发送到外部服务器。', footerTagline: '把每天的小成就连接到目标等级的TOPIK学习服务', footerAbout: '服务介绍',
    modalLabel: '申请信息已保存', modalTitle: '迈向目标等级的<br>第一步已经开始！', confirm: '确定',
    errorNickname: '请输入姓名或昵称。', errorEmailRequired: '请输入电子邮箱。', errorEmailInvalid: '请输入有效的电子邮箱。', errorTarget: '请选择目标等级。',
    confirmReplace: '此邮箱已有保存的申请。要用新信息替换吗？', storageError: '无法使用浏览器存储功能。请检查设置后重试。',
    successNew: '免费体验申请已保存在此浏览器中，并未发送到服务器。', successReplace: '申请信息已在此浏览器中更新。'
  },
  vi: {
    pageTitle: 'Octopus TOPIK | Học vui mỗi ngày, chạm tới mục tiêu',
    pageDescription: 'Hoàn thành nhiệm vụ TOPIK ngắn mỗi ngày, tích điểm và mở khóa chữa chi tiết câu 54.',
    skip: 'Đi tới nội dung chính', navLabel: 'Menu chính', navProblem: 'Khó khăn học tập', navSolution: 'Cách tiến bộ', navFeatures: 'Tính năng', navProcess: 'Cách sử dụng',
    cta: 'Đăng ký trải nghiệm miễn phí', languageLabel: 'Chọn ngôn ngữ', menuOpen: 'Mở menu', menuClose: 'Đóng menu', closeAlert: 'Đóng thông báo',
    heroEyebrow: 'Học TOPIK thấy rõ tiến bộ, không còn học thuộc nhàm chán',
    heroTitle: 'Mỗi ngày một bước,<br>đến <strong>cấp độ TOPIK bạn mong muốn.</strong>',
    heroDescription: 'Học từ vựng, đọc và câu 53 qua nhiệm vụ ngắn để tích điểm. Dùng điểm mở chữa chi tiết câu 54, nhận ra điểm yếu, viết lại và tiến gần mục tiêu.',
    viewProcess: 'Xem cách sử dụng', heroStatsLabel: 'Trải nghiệm tiến bộ cùng Octopus TOPIK',
    statMission: 'Nhiệm vụ hôm nay', statMissionDesc: 'Nhẹ nhàng và thú vị', statPoints: 'Điểm tiến bộ', statPointsDesc: 'Kiên trì được ghi nhận', statFeedback: 'Chữa chi tiết câu 54', statFeedbackDesc: 'Thấy rõ từng điểm yếu',
    illustrationMission: 'Nhiệm vụ hôm nay', illustrationPoints: 'Điểm tiến bộ', illustrationFeedback: 'Chữa chi tiết', illustrationCaption: 'Cùng gia sư AI Octo từng bước tới cấp độ mục tiêu', heroImageAlt: 'Gia sư AI Octo kết nối nhiệm vụ hằng ngày và điểm tiến bộ với chữa viết chi tiết',
    problemLabel: 'Nỗi lo của người học · Pain Point', problemTitle: 'Học mãi nhưng vì sao năng lực vẫn không đổi?', problemIntro: 'Khi tự làm bài, rất khó biết mình đã tiến bộ ở đâu và cần sửa điều gì.',
    problem1Title: 'Không biết vì sao mình sai', problem1Desc: 'Chỉ xem đáp án và điểm số không cho biết cần đổi cách nghĩ hay câu văn nào.',
    problem2Title: 'Khó nhận phản hồi viết thường xuyên', problem2Desc: 'Cần được chữa nhiều lần để tiến bộ, nhưng trả phí mỗi lần là một gánh nặng.',
    problem3Title: 'Thói quen học khó duy trì', problem3Desc: 'Dù mục tiêu rõ ràng, lặp lại cùng kiểu bài mỗi ngày rất dễ mệt mỏi.',
    solutionLabel: 'Vòng lặp tiến bộ Octopus · Solution', solutionTitle: 'Bắt đầu thật vui, kết thúc bằng tiến bộ thật', solutionIntro: 'Thành công nhỏ tạo sự đều đặn; sự đều đặn dẫn đến phản hồi rõ ràng và bài viết tốt hơn.',
    solution1Title: 'Bắt đầu dễ dàng với nhiệm vụ hôm nay', solution1Desc: 'Từ vựng, đọc và câu 53 được chia thành nhiệm vụ ngắn, nhẹ nhàng mỗi ngày.',
    solution2Title: 'Càng học càng tích điểm tiến bộ', solution2Desc: 'Mỗi nhiệm vụ hoàn thành mang lại điểm và cảm giác thành tựu để bạn tiếp tục.',
    solution3Title: 'Nhận ra điểm yếu và viết lại', solution3Desc: 'Dùng điểm mở chữa chi tiết câu 54, xem lý do mất điểm và hướng sửa rồi viết lại.',
    featuresLabel: 'Công cụ tiến bộ mỗi ngày · Core Features', featuresTitle: 'Thói quen TOPIK khiến bạn muốn quay lại mỗi ngày', featuresIntro: 'Thử thách ngắn, tiến bộ rõ ràng và phản hồi cụ thể giúp việc học luôn thú vị.',
    feature1Title: 'Nhiệm vụ từ vựng hôm nay', feature1Desc: 'Học từ TOPIK thường gặp qua câu hỏi ngắn, mỗi ngày một từ.',
    feature2Title: 'Bản đồ điểm yếu đọc hiểu', feature2Desc: 'Phân loại câu sai để thấy ngay dạng đọc bạn thường bỏ lỡ.',
    feature3Title: 'Thử thách viết câu 53', feature3Desc: 'Tìm ý chính của biểu đồ, hoàn thành câu trả lời và sửa ngay với phản hồi cơ bản.',
    feature4Title: 'Chữa chi tiết câu 54', feature4Desc: 'Phân tích nội dung, logic, bố cục, ngữ pháp và từ vựng để cải thiện bài sau.',
    processLabel: 'Hành trình tiến bộ · How it works', processTitle: 'Ba bước tới cấp độ mục tiêu', processIntro: 'Từ thử thách nhỏ hôm nay đến viết lại câu 54, bước tiếp theo luôn rõ ràng.',
    step1Title: 'Thử một nhiệm vụ ngắn', step1Desc: 'Bắt đầu nhẹ nhàng với từ vựng, đọc và câu 53 hôm nay.',
    step2Title: 'Tích thành tích và điểm', step2Desc: 'Càng hoàn thành nhiều nhiệm vụ, thói quen học và điểm trong dịch vụ càng tăng.',
    step3Title: 'Nhận chữa bài và viết lại', step3Desc: 'Dùng điểm để chữa chi tiết câu 54 và hoàn thiện bài tốt hơn.',
    rewardLabel: 'Phần thưởng cho sự đều đặn · Reward Loop', rewardTitle: 'Nhiệm vụ hôm nay<br>trở thành chữa câu 54', rewardIntro: 'Học càng nhiều, bước tiếp theo càng mở rộng.', todayPoints: 'Điểm hôm nay',
    journeyMission: 'Nhiệm vụ', journeyPoints: 'Điểm', journeyFeedback: 'Chữa bài', journeyGrowth: 'Tiến bộ',
    benefitsLabel: 'Thay đổi có thể mong đợi · Expected Effect', benefitsTitle: 'Mỗi ngày một chút,<br>tiến bộ thật rõ ràng.', benefitsIntro: 'Khi nhận ra điểm yếu và viết lại, việc học biến thành tiến bộ.',
    growthMission: 'Nhiệm vụ hôm nay', growthAnswer: 'Bài viết tốt hơn', growthGoal: 'Cấp mục tiêu', benefitWeakness: 'Tìm điểm yếu', benefitRewrite: 'Viết lại', benefitChange: 'Thấy thay đổi',
    audienceLabel: 'Dành cho bạn · For You', audienceTitle: 'Bạn và Octo<br>sẽ là một đội tuyệt vời',
    audience1: 'Mục tiêu TOPIK II<br>cấp 4–6', audience2: 'Học nhiều nhưng<br>chưa tiến bộ', audience3: 'Muốn biết lý do<br>bị trừ điểm viết', audience4: 'Cần thói quen học<br>vui vẻ',
    faqLabel: 'Câu hỏi thường gặp · FAQ', faqTitle: 'Câu hỏi thường gặp',
    faq1Q: 'Điểm tích lũy dùng để làm gì?', faq1A: 'Điểm từ việc học có thể dùng cho chữa chi tiết câu 54 và các tính năng học bổ sung.',
    faq2Q: 'Dịch vụ giúp tôi học đều đặn thế nào?', faq2A: 'Từ vựng, đọc và câu 53 được chia thành nhiệm vụ ngắn. Hoàn thành để nhận điểm trong dịch vụ, mở chữa câu 54 và tạo mục tiêu tiếp theo.',
    faq3Q: 'Điểm được cung cấp có phải điểm TOPIK chính thức?', faq3A: 'Không. Đây là điểm dự đoán và phân tích phục vụ học tập, không đảm bảo kết quả thi chính thức.',
    faq4Q: 'Trải nghiệm miễn phí có gì?', faq4A: 'Bạn có thể trải nghiệm quy trình từ nhiệm vụ từ vựng, đọc, viết đến tích điểm và chữa chi tiết câu 54. Lịch và hướng dẫn sẽ được gửi cho người đăng ký.',
    trialLabel: 'Trải nghiệm miễn phí · Start Today', trialTitle: 'Việc học TOPIK từng khiến bạn loay hoay<br>sẽ thay đổi từ hôm nay', trialIntro: 'Bắt đầu dễ, tiếp tục vui và thấy câu trả lời thay đổi. Chúng tôi sẽ gửi lịch và hướng dẫn cho người đăng ký.',
    trialPoint1: 'Nhiệm vụ TOPIK nhẹ nhàng mỗi ngày', trialPoint2: 'Điểm học tập ghi nhận sự kiên trì', trialPoint3: 'Chữa chi tiết câu 54 giúp thấy điểm yếu',
    nicknameLabel: 'Tên hoặc biệt danh', nicknamePlaceholder: 'VD: Minh', emailLabel: 'Email', currentLevelLabel: 'Cấp hiện tại', targetLevelLabel: 'Cấp mục tiêu', unknown: 'Không biết', selectOption: 'Chọn',
    privacyNote: 'Thông tin chỉ được lưu trong trình duyệt này và không gửi tới máy chủ bên ngoài.', footerTagline: 'Dịch vụ TOPIK biến thành công nhỏ mỗi ngày thành cấp độ mục tiêu', footerAbout: 'Giới thiệu dịch vụ',
    modalLabel: 'Đã lưu đăng ký', modalTitle: 'Bước đầu tiên tới<br>cấp độ mục tiêu đã bắt đầu!', confirm: 'Xác nhận',
    errorNickname: 'Vui lòng nhập tên hoặc biệt danh.', errorEmailRequired: 'Vui lòng nhập email.', errorEmailInvalid: 'Vui lòng nhập email hợp lệ.', errorTarget: 'Vui lòng chọn cấp độ mục tiêu.',
    confirmReplace: 'Đã có đăng ký với email này. Thay bằng thông tin mới?', storageError: 'Không thể sử dụng bộ nhớ trình duyệt. Hãy kiểm tra cài đặt và thử lại.',
    successNew: 'Đăng ký trải nghiệm đã được lưu trong trình duyệt này và không gửi tới máy chủ.', successReplace: 'Thông tin đăng ký đã được cập nhật trong trình duyệt này.'
  },
  mn: {
    pageTitle: 'Octopus TOPIK | Өдөр бүр сонирхолтой сураад зорилгодоо хүр',
    pageDescription: 'Өдөр бүр богино TOPIK даалгавар гүйцэтгэж, оноо цуглуулан 54-р даалгаврын дэлгэрэнгүй засварыг нээгээрэй.',
    skip: 'Үндсэн агуулга руу очих', navLabel: 'Үндсэн цэс', navProblem: 'Суралцах бэрхшээл', navSolution: 'Өсөх арга', navFeatures: 'Гол боломж', navProcess: 'Ашиглах явц',
    cta: 'Үнэгүй туршилтад бүртгүүлэх', languageLabel: 'Хэл сонгох', menuOpen: 'Цэс нээх', menuClose: 'Цэс хаах', closeAlert: 'Мэдэгдэл хаах',
    heroEyebrow: 'Уйтгартай цээжлэлт биш, ахиц харагдах TOPIK сургалт',
    heroTitle: 'Өдөр бүр нэг алхам,<br><strong>хүссэн TOPIK түвшин</strong> хүртэл.',
    heroDescription: 'Үгсийн сан, уншлага, 53-р даалгаврыг богино сорилтоор хийж оноо цуглуулаарай. Оноогоор 54-р даалгаврын дэлгэрэнгүй засварыг нээж, сул талаа мэдэн дахин бичиж зорилгодоо ойртоно.',
    viewProcess: 'Ашиглах явцыг харах', heroStatsLabel: 'Octopus TOPIK-ийн өсөлтийн туршлага',
    statMission: 'Өнөөдрийн даалгавар', statMissionDesc: 'Хөнгөн, сонирхолтой', statPoints: 'Өсөлтийн оноо', statPointsDesc: 'Тууштай байдлыг урамшуулна', statFeedback: '54-р дэлгэрэнгүй засвар', statFeedbackDesc: 'Сул талыг тодорхой харна',
    illustrationMission: 'Өнөөдрийн даалгавар', illustrationPoints: 'Өсөлтийн оноо', illustrationFeedback: 'Дэлгэрэнгүй засвар', illustrationCaption: 'AI багш Octo-той зорилтот түвшин рүү алхам алхмаар', heroImageAlt: 'AI багш Octo өдөр тутмын даалгавар, өсөлтийн оноог бичгийн дэлгэрэнгүй засвартай холбож байна',
    problemLabel: 'Суралцагчийн бэрхшээл · Pain Point', problemTitle: 'Хичээллэсээр байхад яагаад чадвар хэвээрээ вэ?', problemIntro: 'Ганцаараа бодлого бодоход юу сайжирсан, юуг засахаа мэдэхэд хэцүү.',
    problem1Title: 'Яагаад алдсанаа харахгүй', problem1Desc: 'Зөв хариу, оноо л харах нь ямар санаа, өгүүлбэрээ өөрчлөхийг хэлж өгдөггүй.',
    problem2Title: 'Бичгийн зөвлөгөө ойр ойрхон авах хэцүү', problem2Desc: 'Ахихын тулд давтан засвар хэрэгтэй ч бүрд төлбөр төлөх нь дарамттай.',
    problem3Title: 'Сурах дадал удаан тогтохгүй', problem3Desc: 'Зорилго тодорхой байсан ч ижил даалгаврыг өдөр бүр давтах нь амархан ядраана.',
    solutionLabel: 'Octopus өсөлтийн тойрог · Solution', solutionTitle: 'Сонирхолтой эхэлж, бодит ахицаар дуусга', solutionIntro: 'Жижиг амжилт тууштай байдлыг бий болгож, тэр нь тодорхой зөвлөгөө ба дахин бичихэд хүргэнэ.',
    solution1Title: 'Өнөөдрийн даалгавраар хялбар эхэл', solution1Desc: 'Үгсийн сан, уншлага, 53-р даалгаврыг богино хэсэгт хуваан өдөр бүр дарамтгүй хийнэ.',
    solution2Title: 'Сурах тусам өсөлтийн оноо нэмэгдэнэ', solution2Desc: 'Даалгавар бүрийн дараа оноо, амжилт нэмэгдэж дараагийн хичээлээ эхлэх хүч өгнө.',
    solution3Title: 'Сул талаа мэдээд дахин бич', solution3Desc: 'Оноогоор 54-р даалгаврын засварыг нээж, оноо хасагдсан шалтгаан ба засах чиглэлийг хараад дахин бичнэ.',
    featuresLabel: 'Өдөр тутмын өсөлтийн хэрэгсэл · Core Features', featuresTitle: 'Өдөр бүр эргэж орохыг хүсэх TOPIK дадал', featuresIntro: 'Богино сорилт, харагдах ахиц, тодорхой зөвлөгөө сурах сонирхлыг хадгална.',
    feature1Title: 'Өнөөдрийн үгийн сангийн сорилт', feature1Desc: 'TOPIK-д түгээмэл үгийг богино асуултаар өдөр бүр нэг нэгээр сурна.',
    feature2Title: 'Уншлагын сул талын зураг', feature2Desc: 'Алдааг төрлөөр ангилж байнга алддаг уншлагын хэв маягаа нэг дор харна.',
    feature3Title: '53-р бичгийн сорилт', feature3Desc: 'Графикийн гол санааг олж, хариугаа бичээд үндсэн зөвлөгөөгөөр шууд засна.',
    feature4Title: '54-р дэлгэрэнгүй засвар', feature4Desc: 'Агуулга, логик, бүтэц, дүрэм, үгийн санг шинжилж дараагийн хариултын чиглэлийг олно.',
    processLabel: 'Өсөлтийн зам · How it works', processTitle: 'Зорилтот түвшинд хүрэх гурван алхам', processIntro: 'Өнөөдрийн жижиг сорилтоос 54-р даалгаврыг дахин бичих хүртэл дараагийн алхам тодорхой.',
    step1Title: 'Богино даалгавар хий', step1Desc: 'Өнөөдрийн үгсийн сан, уншлага, 53-р даалгавраар хөнгөн эхэл.',
    step2Title: 'Амжилт ба оноо цуглуул', step2Desc: 'Гүйцэтгэсэн даалгавар нэмэгдэх тусам сурах дадал ба үйлчилгээний оноо хамт өснө.',
    step3Title: 'Засвар аваад дахин бич', step3Desc: 'Оноогоор 54-р даалгаврын дэлгэрэнгүй засвар авч, сул талаа тусган хариугаа сайжруул.',
    rewardLabel: 'Тууштай байдлын шагнал · Reward Loop', rewardTitle: 'Өнөөдрийн даалгавар<br>54-р засвар болно', rewardIntro: 'Сурах тусам дараагийн шат нээгдэнэ.', todayPoints: 'Өнөөдрийн оноо',
    journeyMission: 'Даалгавар', journeyPoints: 'Оноо', journeyFeedback: 'Засвар', journeyGrowth: 'Өсөлт',
    benefitsLabel: 'Хүлээж болох өөрчлөлт · Expected Effect', benefitsTitle: 'Өдөр бүр бага багаар,<br>чадвар тодорхой өснө.', benefitsIntro: 'Сул талаа мэдэж дахин бичих мөчид хичээл өсөлт болдог.',
    growthMission: 'Өнөөдрийн даалгавар', growthAnswer: 'Сайжирсан хариу', growthGoal: 'Зорилтот түвшин', benefitWeakness: 'Сул талаа олох', benefitRewrite: 'Дахин бичих', benefitChange: 'Өөрчлөлт харах',
    audienceLabel: 'Танд санал болгоно · For You', audienceTitle: 'Та Octo-той<br>сайн баг болно',
    audience1: 'TOPIK II<br>4–6-р түвшин зорьж буй', audience2: 'Сурч байгаа ч<br>ахицгүй мэт санагддаг', audience3: 'Бичгийн оноо<br>яагаад хасагддагийг мэдэх', audience4: 'Сонирхолтой<br>сурах дадал хэрэгтэй',
    faqLabel: 'Түгээмэл асуулт · FAQ', faqTitle: 'Түгээмэл асуулт',
    faq1Q: 'Цуглуулсан оноогоо юунд ашиглах вэ?', faq1A: 'Суралцаж олсон оноог 54-р даалгаврын дэлгэрэнгүй засвар болон нэмэлт сургалтын боломжид ашиглана.',
    faq2Q: 'Тогтмол сурахад хэрхэн туслах вэ?', faq2A: 'Үгсийн сан, уншлага, 53-р даалгаврыг богино сорилт болгон хуваана. Гүйцэтгэж үйлчилгээний оноо авч, 54-р засварыг нээн дараагийн зорилгоо тавина.',
    faq3Q: 'Өгсөн оноо албан ёсны TOPIK оноо юу?', faq3A: 'Үгүй. Энэ нь сурахад зориулсан тооцоолсон оноо, шинжилгээ бөгөөд албан ёсны шалгалтын үр дүнг батлахгүй.',
    faq4Q: 'Үнэгүй туршилтаар юу үзэх вэ?', faq4A: 'Үгсийн сан, уншлага, бичгийн даалгавраас оноо цуглуулах, 54-р дэлгэрэнгүй засвар хүртэлх урсгалыг туршина. Хуваарь, зааврыг бүртгүүлэгчид хүргэнэ.',
    trialLabel: 'Үнэгүй туршилт · Start Today', trialTitle: 'Ганцаараа зовдог байсан TOPIK хичээл<br>өнөөдрөөс өөрчлөгдөнө', trialIntro: 'Хялбар эхэлж, сонирхолтой үргэлжлүүлэн, хариулт хэрхэн өөрчлөгдөхийг хараарай. Хуваарь, зааврыг бүртгүүлэгчид илгээнэ.',
    trialPoint1: 'Өдөр бүр хөнгөн TOPIK даалгавар', trialPoint2: 'Тууштай байдлыг урамшуулах сургалтын оноо', trialPoint3: 'Сул талыг хэлэх 54-р дэлгэрэнгүй засвар',
    nicknameLabel: 'Нэр эсвэл хоч', nicknamePlaceholder: 'Ж: Мина', emailLabel: 'И-мэйл', currentLevelLabel: 'Одоогийн түвшин', targetLevelLabel: 'Зорилтот түвшин', unknown: 'Мэдэхгүй', selectOption: 'Сонгох',
    privacyNote: 'Мэдээлэл зөвхөн энэ хөтөчид хадгалагдаж, гадаад сервер рүү илгээгдэхгүй.', footerTagline: 'Өдөр тутмын жижиг амжилтыг зорилтот түвшинтэй холбох TOPIK үйлчилгээ', footerAbout: 'Үйлчилгээний тухай',
    modalLabel: 'Бүртгэл хадгалагдлаа', modalTitle: 'Зорилтот түвшин рүү хийх<br>эхний алхам эхэллээ!', confirm: 'Боллоо',
    errorNickname: 'Нэр эсвэл хочоо оруулна уу.', errorEmailRequired: 'И-мэйлээ оруулна уу.', errorEmailInvalid: 'Зөв и-мэйл хаяг оруулна уу.', errorTarget: 'Зорилтот түвшнээ сонгоно уу.',
    confirmReplace: 'Энэ и-мэйлээр бүртгэл хадгалагдсан байна. Шинэ мэдээллээр солих уу?', storageError: 'Хөтчийн хадгалалтыг ашиглах боломжгүй. Тохиргоогоо шалгаад дахин оролдоно уу.',
    successNew: 'Үнэгүй туршилтын бүртгэл энэ хөтөчид хадгалагдсан бөгөөд сервер рүү илгээгдээгүй.', successReplace: 'Бүртгэлийн мэдээлэл энэ хөтөчид шинэчлэгдлээ.'
  },
  ja: {
    pageTitle: 'Octopus TOPIK | 毎日楽しく、目標級まで',
    pageDescription: '毎日短く楽しいTOPIKミッションを達成し、ポイントを貯めて54番の精密添削を利用しましょう。',
    skip: '本文へ移動', navLabel: 'メインメニュー', navProblem: '学習の悩み', navSolution: '成長の仕組み', navFeatures: '主な機能', navProcess: '利用の流れ',
    cta: '無料体験に申し込む', languageLabel: '言語を選択', menuOpen: 'メニューを開く', menuClose: 'メニューを閉じる', closeAlert: '通知を閉じる',
    heroEyebrow: '退屈な暗記ではなく、成長が見えるTOPIK学習',
    heroTitle: '毎日一歩ずつ、<br><strong>目標のTOPIK級</strong>まで。',
    heroDescription: '語彙・読解・53番を短いミッションで楽しみながらポイントを貯めましょう。ポイントで54番の精密添削を利用し、弱点を知って書き直すことで目標に近づけます。',
    viewProcess: '利用の流れを見る', heroStatsLabel: 'Octopus TOPIKの成長体験',
    statMission: '今日のミッション', statMissionDesc: '気軽に楽しく', statPoints: '成長ポイント', statPointsDesc: '継続がごほうびに', statFeedback: '54番精密添削', statFeedbackDesc: '弱点を具体的に',
    illustrationMission: '今日のミッション', illustrationPoints: '成長ポイント', illustrationFeedback: '精密添削', illustrationCaption: 'AIチューターOctoと目標級まで一歩ずつ', heroImageAlt: 'AIチューターOctoが今日のミッションと成長ポイントを作文の精密添削につなげる流れ',
    problemLabel: '学習者の悩み · Pain Point', problemTitle: '勉強しているのに、なぜ実力はそのまま？', problemIntro: '一人で問題を解くだけでは、何が伸びて何を直すべきか分かりにくいものです。',
    problem1Title: '間違えた理由が見えません', problem1Desc: '正解と点数だけでは、どの考え方や文章を変えるべきか分かりません。',
    problem2Title: '作文のフィードバックを頻繁に受けにくい', problem2Desc: '上達には繰り返し添削が必要ですが、毎回の費用は負担になります。',
    problem3Title: '学習習慣が長続きしません', problem3Desc: '目標が明確でも、毎日同じ問題を繰り返すと疲れやすくなります。',
    solutionLabel: 'Octopus成長ループ · Solution', solutionTitle: '楽しく始めて、確かな実力へ', solutionIntro: '小さなミッションの達成感が継続を生み、具体的なフィードバックと書き直しにつながります。',
    solution1Title: '今日のミッションで気軽に開始', solution1Desc: '語彙・読解・53番を短いミッションに分け、毎日無理なく挑戦します。',
    solution2Title: '学ぶほど貯まる成長ポイント', solution2Desc: 'ミッションを達成するたび、ポイントと達成感が次の学習を後押しします。',
    solution3Title: '弱点を知って書き直す', solution3Desc: 'ポイントで54番の精密添削を開き、減点理由と修正方向を確認して書き直します。',
    featuresLabel: '毎日の成長ツール · Core Features', featuresTitle: '毎日戻りたくなるTOPIKルーティン', featuresIntro: '短い挑戦、見える成長、具体的なフィードバックで学ぶ楽しさが続きます。',
    feature1Title: '今日の語彙クエスト', feature1Desc: 'TOPIK頻出語彙を短い問題で学び、毎日一つずつ身につけます。',
    feature2Title: '読解弱点マップ', feature2Desc: '誤答をタイプ別に整理し、よく見落とす読解パターンをひと目で確認します。',
    feature3Title: '53番作文チャレンジ', feature3Desc: 'グラフの要点を見つけて答案を完成し、基本フィードバックですぐに修正します。',
    feature4Title: '54番精密添削', feature4Desc: '内容・論理・構成・文法・語彙を項目別に分析し、次の答案の方向を見つけます。',
    processLabel: '成長プロセス · How it works', processTitle: '目標級まで成長する3ステップ', processIntro: '今日の小さな挑戦から54番の書き直しまで、次のステップが明確です。',
    step1Title: '短いミッションに挑戦', step1Desc: '今日の語彙・読解・53番ミッションで気軽に学習を始めます。',
    step2Title: '達成とポイントを積み上げる', step2Desc: '達成したミッションが増えるほど、学習習慣とサービス内ポイントが一緒に貯まります。',
    step3Title: '添削を受けて書き直す', step3Desc: 'ポイントで54番の精密添削を利用し、弱点を反映して答案を完成します。',
    rewardLabel: '継続のごほうび · Reward Loop', rewardTitle: '今日のミッションが<br>54番の添削に', rewardIntro: '勉強した分だけ次のステップが開きます。', todayPoints: '今日のポイント',
    journeyMission: 'ミッション', journeyPoints: 'ポイント', journeyFeedback: '添削', journeyGrowth: '成長',
    benefitsLabel: '期待できる変化 · Expected Effect', benefitsTitle: '毎日少しずつ、<br>実力は着実に。', benefitsIntro: '弱点を知って書き直す瞬間、勉強が成長に変わります。',
    growthMission: '今日のミッション', growthAnswer: '変わった答案', growthGoal: '目標級', benefitWeakness: '弱点発見', benefitRewrite: '書き直し', benefitChange: '変化を確認',
    audienceLabel: 'こんな方におすすめ · For You', audienceTitle: 'Octoと一緒なら<br>きっと相性ぴったり',
    audience1: 'TOPIK II<br>4〜6級が目標', audience2: '勉強しても<br>伸び悩んでいる', audience3: '作文の減点理由を<br>知りたい', audience4: '楽しい学習習慣が<br>必要',
    faqLabel: 'よくある質問 · FAQ', faqTitle: 'よくある質問',
    faq1Q: '貯めたポイントは何に使えますか？', faq1A: '学習で貯めたポイントは、54番の精密添削や追加学習機能に使用できます。',
    faq2Q: '継続学習をどう支えてくれますか？', faq2A: '語彙・読解・53番を短いミッションに分けます。達成するとサービス内ポイントが貯まり、54番の精密添削を利用して次の目標を作れます。',
    faq3Q: '表示される点数は公式TOPIK点数ですか？', faq3A: 'いいえ。学習を助けるための予想点数と分析であり、公式試験結果を保証するものではありません。',
    faq4Q: '無料体験では何ができますか？', faq4A: '語彙・読解・作文ミッションからポイント獲得、54番の精密添削までの学習フローを体験できます。日程と方法は申込者にご案内します。',
    trialLabel: '無料体験 · Start Today', trialTitle: '一人で悩んでいたTOPIK学習が、<br>今日から変わります', trialIntro: '気軽に始め、楽しく続け、答案の変化を確認しましょう。無料体験の日程と方法をご案内します。',
    trialPoint1: '毎日気軽に挑戦するTOPIKミッション', trialPoint2: '継続を評価する学習ポイント', trialPoint3: '弱点が分かる54番精密添削',
    nicknameLabel: '名前またはニックネーム', nicknamePlaceholder: '例：ミナ', emailLabel: 'メール', currentLevelLabel: '現在の級', targetLevelLabel: '目標級', unknown: '分からない', selectOption: '選択',
    privacyNote: '入力内容はこのブラウザにのみ保存され、外部サーバーには送信されません。', footerTagline: '毎日の小さな達成を目標級につなげるTOPIK学習サービス', footerAbout: 'サービス紹介',
    modalLabel: '申込情報を保存しました', modalTitle: '目標級への<br>第一歩が始まりました！', confirm: '確認',
    errorNickname: '名前またはニックネームを入力してください。', errorEmailRequired: 'メールアドレスを入力してください。', errorEmailInvalid: '正しいメールアドレスを入力してください。', errorTarget: '目標級を選択してください。',
    confirmReplace: '同じメールアドレスの申込が保存されています。新しい情報に置き換えますか？', storageError: 'ブラウザの保存機能を利用できません。設定を確認して再度お試しください。',
    successNew: '無料体験の申込情報をこのブラウザに保存しました。サーバーには送信されていません。', successReplace: '申込情報をこのブラウザで更新しました。'
  }
};

const languageCodes = { ko: 'ko', en: 'en', zh: 'zh-CN', vi: 'vi', mn: 'mn', ja: 'ja' };
let currentLanguage = 'ko';

function translate(key) {
  return translations[currentLanguage]?.[key] || null;
}

function formatLevel(level, language) {
  const number = String(level).match(/\d/)?.[0];
  if (!number) return level;
  if (language === 'en') return `Level ${number}`;
  if (language === 'zh') return `${number}级`;
  if (language === 'vi') return `Cấp ${number}`;
  if (language === 'mn') return `${number}-р түвшин`;
  if (language === 'ja') return `${number}級`;
  return `${number}급`;
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : 'ko';
  document.documentElement.lang = languageCodes[currentLanguage];

  defaultText.forEach((fallback, element) => {
    const value = translate(element.dataset.i18n);
    element.textContent = value || fallback;
  });

  defaultHtml.forEach((fallback, element) => {
    const value = translate(element.dataset.i18nHtml);
    element.innerHTML = value || fallback;
  });

  defaultAttributes.forEach((fallback, element) => {
    if (element.dataset.i18nAriaLabel) {
      element.setAttribute('aria-label', translate(element.dataset.i18nAriaLabel) || fallback.ariaLabel);
    }
    if (element.dataset.i18nPlaceholder) {
      element.setAttribute('placeholder', translate(element.dataset.i18nPlaceholder) || fallback.placeholder);
    }
    if (element.dataset.i18nAlt) {
      element.setAttribute('alt', translate(element.dataset.i18nAlt) || fallback.alt);
    }
  });

  document.title = translate('pageTitle') || '옥토퍼스 토픽 | 매일 재미있게, 목표 급수까지';
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = translate('pageDescription')
      || '매일 짧고 재미있는 TOPIK 미션을 완료하고 포인트를 모아 54번 정밀 첨삭까지. 목표 급수를 향한 공부가 즐거워지는 옥토퍼스 토픽입니다.';
  }

  document.querySelectorAll('#current-level option:not([value=""]), #target-level option:not([value=""])').forEach((option) => {
    option.textContent = formatLevel(option.value || option.textContent, currentLanguage);
  });

  if (languageSelect) languageSelect.value = currentLanguage;
  const isMenuOpen = document.querySelector('.nav-toggle')?.getAttribute('aria-expanded') === 'true';
  document.querySelector('.nav-toggle')?.setAttribute('aria-label', translate(isMenuOpen ? 'menuClose' : 'menuOpen') || (isMenuOpen ? '메뉴 닫기' : '메뉴 열기'));

  try {
    localStorage.setItem('octopusLanguage', currentLanguage);
  } catch (error) {
    // The language still works for this visit when browser storage is unavailable.
  }
}

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem('octopusLanguage');
    if (saved === 'ko' || translations[saved]) return saved;
  } catch (error) {
    // Fall back to browser language.
  }
  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith('zh')) return 'zh';
  if (browserLanguage.startsWith('vi')) return 'vi';
  if (browserLanguage.startsWith('mn')) return 'mn';
  if (browserLanguage.startsWith('ja')) return 'ja';
  if (browserLanguage.startsWith('en')) return 'en';
  return 'ko';
}

languageSelect?.addEventListener('change', () => {
  applyLanguage(languageSelect.value);
  closeMenu();
});

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

applyLanguage(getInitialLanguage());

function closeMenu() {
  if (!navToggle || !primaryNav) return;
  primaryNav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', translate('menuOpen') || '메뉴 열기');
  document.body.classList.remove('menu-open');
}

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', translate(isOpen ? 'menuClose' : 'menuOpen') || (isOpen ? '메뉴 닫기' : '메뉴 열기'));
    document.body.classList.toggle('menu-open', isOpen && window.innerWidth <= 1024);
    if (isOpen) primaryNav.querySelector('a')?.focus();
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!primaryNav.classList.contains('is-open')) return;
    if (primaryNav.contains(event.target) || navToggle.contains(event.target)) return;
    closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) closeMenu();
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });

    if (targetId === '#trial') {
      const trialForm = document.getElementById('trial-form');
      window.setTimeout(() => {
        trialForm?.classList.remove('is-attention');
        void trialForm?.offsetWidth;
        trialForm?.classList.add('is-attention');
      }, reduceMotion ? 0 : 450);
    }
  });
});

document.querySelectorAll('.faq-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const answerId = button.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    if (answer) answer.hidden = expanded;
  });
});

const form = document.getElementById('trial-form');
const successBox = document.getElementById('form-success');
const successModal = document.getElementById('success-modal');
const modalDialog = successModal?.querySelector('.modal-dialog');
let modalTrigger = null;

function closeSuccessModal() {
  if (!successModal || successModal.hidden) return;
  successModal.hidden = true;
  document.body.classList.remove('modal-open');
  modalTrigger?.focus();
}

function openSuccessModal() {
  if (!successModal || !modalDialog) return;
  modalTrigger = document.activeElement;
  successModal.hidden = false;
  document.body.classList.add('modal-open');
  modalDialog.focus();
}

successModal?.querySelectorAll('[data-modal-close]').forEach((control) => {
  control.addEventListener('click', closeSuccessModal);
});

successModal?.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeSuccessModal();
    return;
  }

  if (event.key !== 'Tab' || !modalDialog) return;
  const focusable = [...modalDialog.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])')]
    .filter((element) => !element.disabled && !element.hidden);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

function setError(field, message) {
  const error = document.getElementById(`${field.id}-error`);
  field.setAttribute('aria-invalid', message ? 'true' : 'false');
  if (error) error.textContent = message;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

if (form) {
  form.querySelectorAll('input, select').forEach((field) => {
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') setError(field, '');
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nickname = document.getElementById('nickname');
    const email = document.getElementById('email');
    const currentLevel = document.getElementById('current-level');
    const targetLevel = document.getElementById('target-level');
    const invalidFields = [];

    setError(nickname, '');
    setError(email, '');
    setError(targetLevel, '');

    if (!nickname.value.trim()) {
      setError(nickname, translate('errorNickname') || '이름 또는 닉네임을 입력해 주세요.');
      invalidFields.push(nickname);
    }

    if (!email.value.trim()) {
      setError(email, translate('errorEmailRequired') || '이메일을 입력해 주세요.');
      invalidFields.push(email);
    } else if (!isValidEmail(email.value.trim())) {
      setError(email, translate('errorEmailInvalid') || '올바른 이메일 형식을 입력해 주세요.');
      invalidFields.push(email);
    }

    if (!targetLevel.value) {
      setError(targetLevel, translate('errorTarget') || '목표 급수를 선택해 주세요.');
      invalidFields.push(targetLevel);
    }

    if (invalidFields.length) {
      invalidFields[0].focus();
      if (successBox) successBox.hidden = true;
      return;
    }

    const application = {
      nickname: nickname.value.trim(),
      email: email.value.trim(),
      currentLevel: currentLevel.value || '모름',
      targetLevel: targetLevel.value,
      savedAt: new Date().toISOString()
    };

    let previous = null;

    try {
      previous = JSON.parse(localStorage.getItem('octopusTrialApplication'));
    } catch (error) {
      previous = null;
    }

    if (previous?.email?.toLowerCase() === application.email.toLowerCase()) {
      const shouldReplace = window.confirm(translate('confirmReplace') || '같은 이메일로 저장된 신청이 있습니다. 새 정보로 바꿀까요?');
      if (!shouldReplace) {
        email.focus();
        return;
      }
    }

    try {
      localStorage.setItem('octopusTrialApplication', JSON.stringify(application));
    } catch (error) {
      if (successBox) {
        successBox.textContent = translate('storageError') || '브라우저 저장 기능을 사용할 수 없습니다. 설정을 확인한 뒤 다시 시도해 주세요.';
        successBox.classList.add('is-error');
        successBox.hidden = false;
        successBox.focus();
      }
      return;
    }

    if (successBox) {
      successBox.classList.remove('is-error');
      successBox.textContent = previous
        ? (translate('successReplace') || '신청 정보가 이 브라우저에 새 내용으로 저장되었습니다.')
        : (translate('successNew') || '무료 체험 신청 정보가 이 브라우저에 저장되었습니다. 실제 서버로 전송되지는 않았습니다.');
      successBox.hidden = false;
      successBox.focus();
    }

    form.reset();
    openSuccessModal();
  });
}

const year = document.getElementById('current-year');
if (year) year.textContent = String(new Date().getFullYear());

const revealElements = document.querySelectorAll('[data-reveal]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
}
