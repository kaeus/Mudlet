<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh-CN" sourcelanguage="en">
  <context>
    <name>Discord</name>
    <message>
      <location filename="../src/discord.cpp" line="149"/>
      <source>via Mudlet</source>
      <translation>透过Mudlet的</translation>
    </message>
  </context>
  <context>
    <name>Feed</name>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/feed.cpp" line="275"/>
      <source>Too many redirects.</source>
      <translation>太多重定向</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/feed.cpp" line="284"/>
      <source>No data received from server</source>
      <translation>未从服务器接收任何数据</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/feed.cpp" line="295"/>
      <source>Could not verify download integrity.</source>
      <translation>无法验证下载完整性。</translation>
    </message>
  </context>
  <context>
    <name>GLWidget</name>
    <message>
      <location filename="../src/glwidget.cpp" line="286"/>
      <source>You do not have a map yet - load one, or start mapping from scratch to begin.</source>
      <translation type="unfinished"/>
    </message>
    <message numerus="yes">
      <location filename="../src/glwidget.cpp" line="285"/>
      <source>You have a map loaded (%n room(s)), but Mudlet does not know where you are at the moment.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Host</name>
    <message>
      <location filename="../src/Host.cpp" line="459"/>
      <source>Text to send to the game</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="840"/>
      <source>[  OK  ]  - %1 Thanks a lot for using the Public Test Build!</source>
      <comment>%1 will be a random happy emoji</comment>
      <translation>[  OK  ]  - %1 非常感谢你使用公共测试版!</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="841"/>
      <source>[  OK  ]  - %1 Help us make Mudlet better by reporting any problems.</source>
      <comment>%1 will be a random happy emoji</comment>
      <translation>[  OK  ]  - %1 提交报告将帮助我们提升 Mudlet .</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="1640"/>
      <source>Unpacking module:
&quot;%1&quot;
please wait...</source>
      <translation>正在解压模块:
&quot;%1&quot;
请稍候...</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="1642"/>
      <source>Unpacking package:
&quot;%1&quot;
please wait...</source>
      <translation>正在解压包:
&quot;%1&quot;
请稍候...</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="1646"/>
      <source>Unpacking</source>
      <translation>正在解压缩</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="2250"/>
      <source>Playing %1</source>
      <translation>正在玩 %1</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="2252"/>
      <location filename="../src/Host.cpp" line="2258"/>
      <source>%1 at %2:%3</source>
      <comment>%1 is the game name and %2:%3 is game server address like: mudlet.org:23</comment>
      <translation>%2:%3 上的 %1</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="2638"/>
      <location filename="../src/Host.cpp" line="3570"/>
      <source>Map - %1</source>
      <translation>地图 - %1</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="3586"/>
      <source>Pre-Map loading(3) report</source>
      <translation>加载地图前 (3) 的报告</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="3596"/>
      <source>Loading map(3) at %1 report</source>
      <translation>加载地图中 (3) 的报告，时间：%1</translation>
    </message>
  </context>
  <context>
    <name>KeyUnit</name>
    <message>
      <location filename="../src/KeyUnit.cpp" line="333"/>
      <source>%1undefined key (code: 0x%2)</source>
      <comment>%1 is a string describing the modifier keys (e.g. &quot;shift&quot; or &quot;control&quot;) used with the key, whose &apos;code&apos; number, in %2 is not one that we have a name for. This is probably one of those extra keys around the edge of the keyboard that some people have.</comment>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>MapInfoContributorManager</name>
    <message>
      <location filename="../src/mapInfoContributorManager.cpp" line="116"/>
      <source>Area:%1%2 ID:%1%3 x:%1%4%1&lt;‑&gt;%1%5 y:%1%6%1&lt;‑&gt;%1%7 z:%1%8%1&lt;‑&gt;%1%9
</source>
      <comment>This text uses non-breaking spaces (as &apos;%1&apos;s, as Qt Creator cannot handlethem literally in raw strings) and non-breaking hyphens which are used to prevent the line being split at some places it might otherwise be; when translating please consider at which points the text may be divided to fit onto more than one line. %2 is the (text) name of the area, %3 is the number for it, %4 to %9 are pairs (min &lt;-&gt; max) of extremes for each of x,y and z coordinates</comment>
      <translation>区域：%1%2 ID:%1%3 x：%1%4%1&lt;‑&gt;%1%5 y：%1%6%1&lt;‑&gt;%1%7 z:%1%8%1&lt;‑&gt;%1%9
</translation>
    </message>
    <message>
      <location filename="../src/mapInfoContributorManager.cpp" line="140"/>
      <source>Room Name: %1
</source>
      <translation>房间名: %1
</translation>
    </message>
    <message>
      <location filename="../src/mapInfoContributorManager.cpp" line="153"/>
      <source>Room%1ID:%1%2 Position%1on%1Map: (%3,%4,%5) ‑%1current player location
</source>
      <comment>This text uses non-breaking spaces (as &apos;%1&apos;s, as Qt Creator cannot handlethem literally in raw strings) and a non-breaking hyphen which are used to prevent the line being split at some places it might otherwise be; when translating please consider at which points the text may be divided to fit onto more than one line. This text is for when NO rooms are selected, %3 is the room number of, and %4-%6 are the x,y and z coordinates for, the current player&apos;s room.</comment>
      <translation>房间%1ID:%1%2 位置%1on%1地图: (%3,%4,%5) ‑%1当前玩家位置
</translation>
    </message>
    <message>
      <location filename="../src/mapInfoContributorManager.cpp" line="170"/>
      <source>Room%1ID:%1%2 Position%1on%1Map: (%3,%4,%5) ‑%1selected room
</source>
      <comment>This text uses non-breaking spaces (as &apos;%1&apos;s, as Qt Creator cannot handlethem literally in raw strings) and a non-breaking hyphen which are used to prevent the line being split at some places it might otherwise be; when translating please consider at which points the text may be divided to fit onto more than one line. This text is for when ONE room is selected, %3 is the room number of, and %4-%6 are the x,y and z coordinates for, the selected Room.</comment>
      <translation>房间%1ID:%1%2 位置%1on%1地图: (%3,%4,%5) ‑%1选中的房间
</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/mapInfoContributorManager.cpp" line="188"/>
      <source>Room%1ID:%1%2 Position%1on%1Map: (%3,%4,%5) ‑%1center of %n selected rooms
</source>
      <comment>This text uses non-breaking spaces (as &apos;%1&apos;s, as Qt Creator cannot handlethem literally in raw strings) and a non-breaking hyphen which are used to prevent the line being split at some places it might otherwise be; when translating please consider at which points the text may be divided to fit onto more than one line. This text is for when TWO or MORE rooms are selected; %1 is the room number for which %2-%4 are the x,y and z coordinates of the room nearest the middle of the selection. This room has the yellow cross-hairs. %n is the count of rooms selected and will ALWAYS be greater than 1 in this situation. It is provided so that non-English translations can select required plural forms as needed.</comment>
      <translation>
        <numerusform>房间%1ID:%1%2 位置%1on%1地图: (%3,%4,%5) ‑%1 %n 选择房间的中心
</numerusform>
      </translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="142"/>
      <source>! %1</source>
      <translation>! %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="144"/>
      <source>! %1 is away (%2)</source>
      <translation>! %1 离开了 (%2)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="146"/>
      <source>! %1 is back</source>
      <translation>! %1 回来了</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="153"/>
      <source>! invited %1 to %2</source>
      <translation>! 邀请%1加入%2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="156"/>
      <source>! %2 invited to %3</source>
      <translation>! %2被邀请加入%3</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="163"/>
      <source>! You have joined %1 as %2</source>
      <translation>! 你作为%1加入了%2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="165"/>
      <source>! %1 has joined %2</source>
      <translation>! %1已加入%2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="172"/>
      <source>! %1 kicked %2</source>
      <translation>! %1把%2踢出了队伍</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="180"/>
      <source>! %1 mode is %2 %3</source>
      <translation>! %1 模式是 %2 %3</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="182"/>
      <source>! %1 sets mode %2 %3 %4</source>
      <translation>! %1 设置模式 %2 %3 %4</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="199"/>
      <source>[MOTD] %1%2</source>
      <translation>[MOTD] %1%2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="211"/>
      <source>! %1 has %2 users: %3</source>
      <translation>! %1 有 %2 用户: %3</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="213"/>
      <source>! %1 has %2 users</source>
      <translation>! %1 有 %2 用户</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="220"/>
      <source>! %1 has changed nick to %2</source>
      <translation>! %1 将nick更改为 %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="234"/>
      <source>! %1 replied in %2</source>
      <translation>! %1在%2内回复了</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="237"/>
      <location filename="../src/ircmessageformatter.cpp" line="286"/>
      <source>! %1 time is %2</source>
      <translation>! %1 时间是 %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="240"/>
      <location filename="../src/ircmessageformatter.cpp" line="283"/>
      <source>! %1 version is %2</source>
      <translation>! %1 版本是 %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="256"/>
      <source>[%1%2] %3</source>
      <translation>[%1%2] %3</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="264"/>
      <source>&amp;lt;%1%2&amp;gt; [%3] %4</source>
      <translation>&amp;lt;%1%2&amp;gt; [%3] %4</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="278"/>
      <source>[INFO] %1</source>
      <translation>[INFO] %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="305"/>
      <location filename="../src/ircmessageformatter.cpp" line="331"/>
      <source>[ERROR] %1</source>
      <translation>[ERROR] %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="315"/>
      <source>[Channel URL] %1</source>
      <translation>[Channel URL] %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="324"/>
      <source>[%1] %2</source>
      <translation>[%1] %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="338"/>
      <source>! %1 has left %2</source>
      <translation>! %1 已离开 %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="340"/>
      <source>! %1 has left %2 (%3)</source>
      <translation>! %1 已离开 %2 (%3)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="349"/>
      <source>! %1 replied in %2 seconds</source>
      <translation>! %1在%2秒内回复了</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="363"/>
      <source>* %1 %2</source>
      <translation>* %1 %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="369"/>
      <source>&lt;b&gt;&amp;lt;%1&amp;gt;&lt;/b&gt; %2</source>
      <translation>&lt;b&gt;&amp;lt;%1&amp;gt;&lt;/b&gt; %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="378"/>
      <source>! %1 has quit</source>
      <translation>! %1 已退出</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="380"/>
      <source>! %1 has quit (%2)</source>
      <translation>! %1 已退出 (%2)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="388"/>
      <source>! no topic</source>
      <translation>! 没有主题</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="397"/>
      <source>[TOPIC] %1</source>
      <translation>[TOPIC] %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="401"/>
      <source>! %2 cleared topic</source>
      <translation>! %2清空了主题</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="404"/>
      <source>! %2 changed topic</source>
      <translation>! %2变更了主题</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="410"/>
      <source>? %2 %3 %4</source>
      <translation>? %2 %3 %4</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="417"/>
      <source>[WHOIS] %1 is %2@%3 (%4)</source>
      <translation>[WHOIS] %1 is %2@%3 (%4)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="418"/>
      <source>[WHOIS] %1 is connected via %2 (%3)</source>
      <translation>[WHOIS] %1 通过 %2 (%3) 连接</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="419"/>
      <source>[WHOIS] %1 is connected since %2 (idle %3)</source>
      <translation>[WHOIS] %1 连接自 %2 (空闲 %3)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="421"/>
      <source>[WHOIS] %1 is away: %2</source>
      <translation>[WHOIS] %1 离开了: %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="424"/>
      <source>[WHOIS] %1 is logged in as %2</source>
      <translation>[WHOIS] %1 以 %2 的身份登录</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="427"/>
      <source>[WHOIS] %1 is connected from %2</source>
      <translation>[WHOIS] %1 通过 %2 连接</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="430"/>
      <source>[WHOIS] %1 is using a secure connection</source>
      <translation>[WHOIS] %1 正在使用安全连接</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="433"/>
      <source>[WHOIS] %1 is on %2</source>
      <translation>[WHOIS] %1 位于 %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="442"/>
      <source>[WHOWAS] %1 was %2@%3 (%4)</source>
      <translation>[WHOWAS] %1 曾是 %2@%3 (%4)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="443"/>
      <source>[WHOWAS] %1 was connected via %2 (%3)</source>
      <translation>[WHOWAS] %1 通过 %2 (%3) 连接</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="445"/>
      <source>[WHOWAS] %1 was logged in as %2</source>
      <translation>[WHOWAS] %1 以 %2 的身份登录</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="453"/>
      <source>[WHO] %1 (%2)</source>
      <translation>[WHO] %1 (%2)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="455"/>
      <source> - away</source>
      <translation> - 离开</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="458"/>
      <source> - server operator</source>
      <translation>管理员</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="466"/>
      <source>%1s</source>
      <translation>%1 秒</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="473"/>
      <source>%1 days</source>
      <translation>%1 天</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="477"/>
      <source>%1 hours</source>
      <translation>%1 小时</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="481"/>
      <source>%1 mins</source>
      <translation>%1 分钟</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="483"/>
      <source>%1 secs</source>
      <translation>%1 秒</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/baseplistparser.cpp" line="55"/>
      <source>Start element not found!</source>
      <translation>未找到启动元素！</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/baseplistparser.cpp" line="67"/>
      <source>line %1: %2</source>
      <translation>第%1行：%2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/baseplistparser.cpp" line="149"/>
      <source>Expected %1 while parsing</source>
      <translation>执行时异常 %1</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/jsonparser.cpp" line="145"/>
      <source>%1 @ line %2</source>
      <translation>%1 在 第 %2 行</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/keymapparser.cpp" line="82"/>
      <source>No data found!</source>
      <translation>找不到数据。</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/keymapparser.cpp" line="89"/>
      <source>Expected object in keymap
</source>
      <translation>预期的键映射对象
</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/keymapparser.cpp" line="129"/>
      <source>Invalid keysequence used %1
</source>
      <translation>使用的验证序列无效 %1
</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/models/texteditorkeymap.cpp" line="371"/>
      <source>Error parsing %1: %2 </source>
      <translation>解析 %1时出错: %2 </translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/models/textgrammar.cpp" line="306"/>
      <source>Error reading file %1:%2</source>
      <translation>读取文件 %1 出错: %2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="435"/>
      <source>%1 ranges</source>
      <translation>%1 范围</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="441"/>
      <source>Line %1, Column %2</source>
      <translation>行 %1，列 %2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="444"/>
      <source>, Offset %1</source>
      <translation>, 偏移 %1</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="448"/>
      <source> | %1 chars selected</source>
      <translation> | %1 个字符被选中</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="452"/>
      <source> | scope: </source>
      <translation> | 范围： </translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="462"/>
      <source> (%1)</source>
      <translation> (%1)</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/texttheme.cpp" line="399"/>
      <source>Error parsing theme %1:%2</source>
      <translation>解析主题 %1时出错:%2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/texttheme.cpp" line="404"/>
      <source>Error theme not found %1.</source>
      <translation>未找到主题 %1.</translation>
    </message>
  </context>
  <context>
    <name>T2DMap</name>
    <message>
      <location filename="../src/T2DMap.cpp" line="2789"/>
      <source>Create a new room here</source>
      <translation>在这里创建一个新房间</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2962"/>
      <source>Change the properties of this custom line</source>
      <translation>更改此段自定义线的属性</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3193"/>
      <location filename="../src/T2DMap.cpp" line="4808"/>
      <source>Solid line</source>
      <translation>实线</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3194"/>
      <location filename="../src/T2DMap.cpp" line="4809"/>
      <source>Dot line</source>
      <translation>点线</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3195"/>
      <location filename="../src/T2DMap.cpp" line="4810"/>
      <source>Dash line</source>
      <translation>虚线</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3196"/>
      <location filename="../src/T2DMap.cpp" line="4811"/>
      <source>Dash-dot line</source>
      <translation>点虚相间线</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3197"/>
      <location filename="../src/T2DMap.cpp" line="4812"/>
      <source>Dash-dot-dot line</source>
      <translation>点虚相间线</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3485"/>
      <source>x coordinate (was %1):</source>
      <translation>x轴坐标(之前为%1)</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3486"/>
      <source>y coordinate (was %1):</source>
      <translation>y轴坐标(之前为%1)</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3487"/>
      <source>z coordinate (was %1):</source>
      <translation>z轴坐标(之前为%1)</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3675"/>
      <source>Delete color</source>
      <comment>Deletes an environment colour</comment>
      <translation>删除颜色</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3693"/>
      <source>Define new color</source>
      <translation>定义新颜色</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4007"/>
      <source>%1 {count:%2}</source>
      <translation>%1 {计数: %2}</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="1378"/>
      <location filename="../src/T2DMap.cpp" line="1499"/>
      <location filename="../src/T2DMap.cpp" line="2310"/>
      <location filename="../src/T2DMap.cpp" line="2326"/>
      <source>no text</source>
      <comment>Default text if a label is created in mapper with no text</comment>
      <translation>无文本</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="142"/>
      <source>ID</source>
      <comment>Room ID in the mapper widget</comment>
      <translation>编号</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="142"/>
      <source>Name</source>
      <comment>Room name in the mapper widget</comment>
      <translation>名称</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="144"/>
      <source>&lt;p&gt;Click on a line to select or deselect that room number (with the given name if the rooms are named) to add or remove the room from the selection.  Click on the relevant header to sort by that method.  Note that the name column will only show if at least one of the rooms has a name.&lt;/p&gt;</source>
      <translation>&lt;p&gt;在选择列表里添加或移除一个房间，点击一条连线选择或取消该房间号（及其名称，如果房间已命名）。点击相关的标题来排序。注意只有至少一个房间已命名时名称列才会显示。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="602"/>
      <source>Mapper: Cannot find a path from %1 to %2 using known exits.</source>
      <translation>Mapper: 找不到从房间 %1 到 %2 的有效路径。</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="1253"/>
      <source>You do not have a map yet - load one, or start mapping from scratch to begin.</source>
      <translation type="unfinished"/>
    </message>
    <message numerus="yes">
      <location filename="../src/T2DMap.cpp" line="1252"/>
      <source>You have a map loaded (%n room(s)), but Mudlet does not know where you are at the moment.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2244"/>
      <source>render time: %1S mO: (%2,%3,%4)</source>
      <comment>This is debug information that is not expected to be seen in release versions, %1 is a decimal time period and %2-%4 are the x,y and z coordinates at the center of the view (but y will be negative compared to previous room related ones as it represents the real coordinate system for this widget which has y increasing in a downward direction!)</comment>
      <translation>渲染时间: %1S mO: (%2,%3,%4)</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2316"/>
      <source>Text label or image label?</source>
      <comment>2D Mapper create label dialog text</comment>
      <translation>文本标签或图像标签?</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2317"/>
      <source>Text Label</source>
      <comment>2D Mapper create label dialog button</comment>
      <translation>文本标签</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2318"/>
      <source>Image Label</source>
      <comment>2D Mapper create label dialog button</comment>
      <translation>图片标签</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2322"/>
      <source>Enter label text.</source>
      <comment>2D Mapper create label dialog title/text</comment>
      <translation>输入标签文字</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2329"/>
      <source>Background color</source>
      <comment>2D Mapper create label color dialog title</comment>
      <translation>背景色</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2330"/>
      <source>Foreground color</source>
      <comment>2D Mapper create label color dialog title</comment>
      <translation>前景色</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2334"/>
      <source>Select image</source>
      <comment>2D Mapper create label file dialog title</comment>
      <translation>选择图像</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2341"/>
      <source>Draw label as background or on top of everything?</source>
      <comment>2D Mapper create label dialog text</comment>
      <translation>是否作为背景或在所有内容顶部绘制标签？</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2342"/>
      <source>Background</source>
      <comment>2D Mapper create label dialog button</comment>
      <translation>背景</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2343"/>
      <source>Foreground</source>
      <comment>2D Mapper create label dialog button</comment>
      <translation>前景</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2585"/>
      <source>Drag to select multiple rooms or labels, release to finish...</source>
      <comment>2D Mapper big, bottom of screen help message</comment>
      <translation>拖拽选择多个房间或标签，释放完成选择……</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2689"/>
      <source>Undo</source>
      <comment>2D Mapper context menu (drawing custom exit line) item</comment>
      <translation>撤消</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2690"/>
      <source>Undo last point</source>
      <comment>2D Mapper context menu (drawing custom exit line) item tooltip</comment>
      <translation>撤销上一个点</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2697"/>
      <source>Properties</source>
      <comment>2D Mapper context menu (drawing custom exit line) item name (but not used as display text as that is set separately)</comment>
      <translation>属性</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2699"/>
      <source>properties...</source>
      <comment>2D Mapper context menu (drawing custom exit line) item display text (has to be entered separately as the ... would get stripped off otherwise)</comment>
      <translation>属性...</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2700"/>
      <source>Change the properties of this line</source>
      <comment>2D Mapper context menu (drawing custom exit line) item tooltip</comment>
      <translation>改变这条线的属性</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2703"/>
      <source>Finish</source>
      <comment>2D Mapper context menu (drawing custom exit line) item</comment>
      <translation>完成</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2704"/>
      <source>Finish drawing this line</source>
      <comment>2D Mapper context menu (drawing custom exit line) item tooltip</comment>
      <translation>完成绘制这条线</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2771"/>
      <source>Create new map</source>
      <comment>2D Mapper context menu (no map found) item</comment>
      <translation>新建地图</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2774"/>
      <source>Load map</source>
      <comment>2D Mapper context menu (no map found) item</comment>
      <translation>载入地图</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2788"/>
      <source>Create room</source>
      <comment>Menu option to create a new room in the mapper</comment>
      <translation>创建房间</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2795"/>
      <source>Move</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>移动</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2796"/>
      <source>Move room</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>移动房间</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2799"/>
      <source>Delete</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>删除</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2800"/>
      <source>Delete room</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>删除房间</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2803"/>
      <source>Color</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>颜色</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2804"/>
      <source>Change room color</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>改变房间颜色</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2807"/>
      <source>Spread</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>展开</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2808"/>
      <source>Increase map X-Y spacing for the selected group of rooms</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>增加地图X-Y间距为选定的集团的房间</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2811"/>
      <source>Shrink</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>收缩</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2812"/>
      <source>Decrease map X-Y spacing for the selected group of rooms</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>减少选定房间组的 map X Y 间距</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2815"/>
      <source>Lock</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>锁定</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2816"/>
      <source>Lock room for speed walks</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>为快速行走锁定房间</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2819"/>
      <source>Unlock</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>解锁​​​​</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2820"/>
      <source>Unlock room for speed walks</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>为快速行走解锁房间</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2823"/>
      <source>Weight</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>权重</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2824"/>
      <source>Set room weight</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>设置房间权重</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2827"/>
      <source>Exits</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>出口</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2828"/>
      <source>Set room exits</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>设置房间出口</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2831"/>
      <source>Symbol</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>符号</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2832"/>
      <source>Set one or more symbols or letters to mark special rooms</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>设置一个或多个符号或字符来标记特殊房间</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2835"/>
      <source>Move to</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>移动至</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2836"/>
      <source>Move selected group to a given position</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>移动选中的组到特定的位置</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2839"/>
      <source>Area</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>区域</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2840"/>
      <source>Set room&apos;s area number</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>设置房间&apos;的区域编号</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2843"/>
      <source>Custom exit line</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>自定义退出行</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2845"/>
      <source>Replace an exit line with a custom line</source>
      <comment>2D Mapper context menu (room) item tooltip (enabled state)</comment>
      <translation>用自定义线替换出口线</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2849"/>
      <source>Custom exit lines are not shown and are not editable in grid mode</source>
      <comment>2D Mapper context menu (room) item tooltip (disabled state)</comment>
      <translation>自定义的出口线不可见且不可在网格模式中编辑</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2853"/>
      <source>Create Label</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>创建标签</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2854"/>
      <source>Create labels to show text or images</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>创建标签以显示文本或图像</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2873"/>
      <source>Set location</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>设定位置</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2875"/>
      <source>Set player current location to here</source>
      <comment>2D Mapper context menu (room) item tooltip (enabled state)</comment>
      <translation>将角色的当前位置设置在此处</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2879"/>
      <source>Can only set location when exactly one room is selected</source>
      <comment>2D Mapper context menu (room) item tooltip (disabled state)</comment>
      <translation>仅当选择一个房间时才能设置位置</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2886"/>
      <source>Switch to editing mode</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2887"/>
      <source>Switch to viewing mode</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2897"/>
      <source>Move</source>
      <comment>2D Mapper context menu (label) item</comment>
      <translation>移动</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2898"/>
      <source>Move label</source>
      <comment>2D Mapper context menu item (label) tooltip</comment>
      <translation>移动标签</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2900"/>
      <source>Delete</source>
      <comment>2D Mapper context menu (label) item</comment>
      <translation>删除</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2901"/>
      <source>Delete label</source>
      <comment>2D Mapper context menu (label) item tooltip</comment>
      <translation>删除标签</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2917"/>
      <source>Add point</source>
      <comment>2D Mapper context menu (custom line editing) item</comment>
      <translation>添加点</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2924"/>
      <source>Divide segment by adding a new point mid-way along</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (enabled state)</comment>
      <translation>通过在中途添加新点以划分线段</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2927"/>
      <source>Select a point first, then add a new point mid-way along the segment towards room</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (disabled state, i.e must do the suggested action first)</comment>
      <translation>先选择点，再在线段中间添加新点朝向房间</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2931"/>
      <source>Remove point</source>
      <comment>2D Mapper context menu (custom line editing) item</comment>
      <translation>删除点</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2938"/>
      <source>Merge pair of segments by removing this point</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (enabled state but will be able to be done again on this item)</comment>
      <translation>通过移除此点合并线段对</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2942"/>
      <source>Remove last segment by removing this point</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (enabled state but is the last time this action can be done on this item)</comment>
      <translation>通过移除此点移除上个线段</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2947"/>
      <source>use &quot;delete line&quot; to remove the only segment ending in an editable point</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (disabled state this action can not be done again on this item but something else can be the quoted action &quot;delete line&quot; should match the translation for that action)</comment>
      <translation>使用&quot;删除连线&quot;移除以可编辑点为结尾的唯一线段。</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2953"/>
      <source>Select a point first, then remove it</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (disabled state, user will need to do something before it can be used)</comment>
      <translation>先选择一个点, 然后将其删除</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2957"/>
      <source>Properties</source>
      <comment>2D Mapper context menu (custom line editing) item name (but not used as display text as that is set separately)</comment>
      <translation>属性</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2961"/>
      <source>properties...</source>
      <comment>2D Mapper context menu (custom line editing) item display text (has to be entered separately as the ... would get stripped off otherwise</comment>
      <translation>属性...</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2965"/>
      <source>Delete line</source>
      <comment>2D Mapper context menu (custom line editing) item</comment>
      <translation>删除线</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2966"/>
      <source>Delete all of this custom line</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip</comment>
      <translation>删除所有此自定义线</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3478"/>
      <source>Move the selection, centered on
the highlighted room (%1) to:</source>
      <comment>Use linefeeds as necessary to format text into a reasonable rectangle of text, %1 is a room number</comment>
      <translation>移动选择，将中心从高亮房间 (%1) 移至:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3502"/>
      <source>OK</source>
      <comment>dialog (room(s) move) button</comment>
      <translation>好</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3507"/>
      <source>Cancel</source>
      <comment>dialog (room(s) move) button</comment>
      <translation>取消</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3701"/>
      <source>OK</source>
      <comment>dialog (room(s) change color) button</comment>
      <translation>好</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3706"/>
      <source>Cancel</source>
      <comment>dialog (room(s) change color) button</comment>
      <translation>取消</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3763"/>
      <source>Spread out rooms</source>
      <translation>分散房间</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3764"/>
      <source>Increase the spacing of
the selected rooms,
centered on the
highlighted room by a
factor of:</source>
      <translation>居中高亮房间，按指定倍数增加选中房间间距：</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3823"/>
      <source>Shrink in rooms</source>
      <translation>聚拢房间</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3824"/>
      <source>Decrease the spacing of
the selected rooms,
centered on the
highlighted room by a
factor of:</source>
      <translation>居中高亮房间，按指定倍数缩小选中房间间距：</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3952"/>
      <location filename="../src/T2DMap.cpp" line="3966"/>
      <location filename="../src/T2DMap.cpp" line="4016"/>
      <source>Enter room weight</source>
      <translation>输入房间权重</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3953"/>
      <source>Enter new roomweight
(= travel time), minimum
(and default) is 1:</source>
      <comment>Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>输入新的房间权重 (＝路程远近) ，最小值 (默认值) 为1：</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3967"/>
      <source>Enter new roomweight
(= travel time) for all
selected rooms, minimum
(and default) is 1 and
the only current value
used is:</source>
      <comment>Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>为所有选中房间输入新的房间权重 (=路程远近) ，最小值 (默认值) 为1，当前权重为：</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4005"/>
      <source>%1 {count:%2, default}</source>
      <translation>%1 {总数：%2，默认值}</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4013"/>
      <source>1 {count 0, default}</source>
      <translation>1 {count 0, default}</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4017"/>
      <source>Choose an existing
roomweight (= travel
time) from the list
(sorted by most commonly
used first) or enter a
new (positive) integer
value for all selected
rooms:</source>
      <comment>Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>为所有选中房间设置房间权重 (=路程远近) ，可以从列表中选择一个使用过的值 (常用的值排在前面)，也可以输入一个新值 (正整数) ：</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4066"/>
      <source>Load Mudlet map</source>
      <translation>载入 Mudlet 地图</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4068"/>
      <source>Mudlet map (*.dat);;Xml map data (*.xml);;Any file (*)</source>
      <comment>Do not change extensions (in braces) or the ;;s as they are used programmatically</comment>
      <translation>Mudlet 地图 (*.dat);;Xml 地图数据 (*.xml);;所有文件 (*)</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4955"/>
      <location filename="../src/T2DMap.cpp" line="4989"/>
      <source>Left-click to add point, right-click to undo/change/finish...</source>
      <comment>2D Mapper big, bottom of screen help message</comment>
      <translation>单击左键添加端点，单击右键 撤销／修改／结束...</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="5000"/>
      <source>Left-click and drag a square for the size and position of your label</source>
      <comment>2D Mapper big, bottom of screen help message</comment>
      <translation>单击左键并拖动一个方形可以设置标签大小和位置</translation>
    </message>
  </context>
  <context>
    <name>TAlias</name>
    <message>
      <location filename="../src/TAlias.cpp" line="132"/>
      <location filename="../src/TAlias.cpp" line="200"/>
      <source>[Alias Error:] %1 capture group limit exceeded, capture less groups.
</source>
      <translation>[别名错误:] %1 超出捕获组最大限制。
</translation>
    </message>
    <message>
      <location filename="../src/TAlias.cpp" line="269"/>
      <source>Error: in &quot;Pattern:&quot;, faulty regular expression, reason: &quot;%1&quot;.</source>
      <translation>错误：在 &quot;的模式:&quot;，错误的正则表达式，原因是: &quot;%1&quot;.</translation>
    </message>
  </context>
  <context>
    <name>TArea</name>
    <message>
      <location filename="../src/TArea.cpp" line="376"/>
      <source>roomID=%1 does not exist, can not set properties of a non-existent room!</source>
      <translation>房间号=%1不存在，不能为一个不存在的房间设置属性！</translation>
    </message>
    <message>
      <location filename="../src/TArea.cpp" line="766"/>
      <source>no text</source>
      <comment>Default text if a label is created in mapper with no text</comment>
      <translation>无文本</translation>
    </message>
  </context>
  <context>
    <name>TCommandLine</name>
    <message>
      <location filename="../src/TCommandLine.cpp" line="661"/>
      <source>Add to user dictionary</source>
      <translation>添加到用户字典</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="663"/>
      <source>Remove from user dictionary</source>
      <translation>从用户字典中删除</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="667"/>
      <source>▼Mudlet▼ │ dictionary suggestions │ ▲User▲</source>
      <comment>This line is shown in the list of spelling suggestions on the profile&apos;s command-line context menu to clearly divide up where the suggestions for correct spellings are coming from.  The precise format might be modified as long as it is clear that the entries below this line in the menu come from the spelling dictionary that the user has chosen in the profile setting which we have bundled with Mudlet; the entries about this line are the ones that the user has personally added.</comment>
      <translation>▼ Mudlet ▼ │ 字典建议 │ ▲ 用户 ▲</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="677"/>
      <source>▼System▼ │ dictionary suggestions │ ▲User▲</source>
      <comment>This line is shown in the list of spelling suggestions on the profile&apos;s command-line context menu to clearly divide up where the suggestions for correct spellings are coming from.  The precise format might be modified as long as it is clear that the entries below this line in the menu come from the spelling dictionary that the user has chosen in the profile setting which is provided as part of the OS; the entries about this line are the ones that the user has personally added.</comment>
      <translation>▼ 系统 ▼ │ 字典建议 │ ▲ 用户 ▲</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="745"/>
      <source>no suggestions (system)</source>
      <comment>used when the command spelling checker using the selected system dictionary has no words to suggest</comment>
      <translation>没有建议 (系统)</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="772"/>
      <source>no suggestions (shared)</source>
      <comment>used when the command spelling checker using the dictionary shared between profile has no words to suggest</comment>
      <translation>没有建议 (共享)</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="776"/>
      <source>no suggestions (profile)</source>
      <comment>used when the command spelling checker using the profile&apos;s own dictionary has no words to suggest</comment>
      <translation>没有建议 (配置文件)</translation>
    </message>
  </context>
  <context>
    <name>TConsole</name>
    <message>
      <location filename="../src/TConsole.cpp" line="113"/>
      <source>Debug Console</source>
      <translation>调试控制台</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="771"/>
      <source>Save profile?</source>
      <translation>保存配置？</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="771"/>
      <source>Do you want to save the profile %1?</source>
      <translation>要保存用户配置文件%1吗?</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="784"/>
      <source>Couldn&apos;t save profile</source>
      <translation>无法保存用户配置文件</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="784"/>
      <source>Sorry, couldn&apos;t save your profile - got the following error: %1</source>
      <translation>对不起, 以下错误导致无法保存用户配置文件: %1</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="1697"/>
      <source>System Message: %1</source>
      <translation>系统消息: %1</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="349"/>
      <source>Show Time Stamps.</source>
      <translation>显示时间戳.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="361"/>
      <source>Record a replay.</source>
      <translation>记录本地录像.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="372"/>
      <source>Start logging game output to log file.</source>
      <translation>开始向日志文件写入游戏输出.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="383"/>
      <source>&lt;i&gt;N:&lt;/i&gt; is the latency of the game server and network (aka ping, in seconds), &lt;br&gt;&lt;i&gt;S:&lt;/i&gt; is the system processing time - how long your triggers took to process the last line(s).</source>
      <translation>&lt;i&gt;N:&lt;/i&gt; 表示游戏服务器和网络的延迟 (亦称ping值, 单位为秒), &lt;br&gt;&lt;i&gt;S:&lt;/i&gt; 表示系统处理耗时, 也就是你的触发器着手处理上一行 (或者多行) 游戏输出所花费的时间.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="416"/>
      <source>Emergency Stop. Stops all timers and triggers.</source>
      <translation>紧急停止. 停止所有定时器和触发器.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="432"/>
      <source>Search buffer.</source>
      <translation>查找缓冲区.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="440"/>
      <source>Earlier search result.</source>
      <translation>更早的搜索结果.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="451"/>
      <source>Later search result.</source>
      <translation>最近的搜索结果.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="868"/>
      <source>Replay recording has started. File: %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="871"/>
      <source>Replay recording has been stopped. File: %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="1850"/>
      <location filename="../src/TConsole.cpp" line="1889"/>
      <source>No search results, sorry!</source>
      <translation>未找到搜索结果</translation>
    </message>
  </context>
  <context>
    <name>TEasyButtonBar</name>
    <message>
      <location filename="../src/TEasyButtonBar.cpp" line="70"/>
      <source>Easybutton Bar - %1 - %2</source>
      <translation>简单按钮栏 - %1 - %2</translation>
    </message>
  </context>
  <context>
    <name>TLuaInterpreter</name>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="9976"/>
      <source>Playing %1</source>
      <translation>正在玩 %1</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="12319"/>
      <location filename="../src/TLuaInterpreter.cpp" line="12340"/>
      <source>ERROR</source>
      <translation>错误</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="12320"/>
      <location filename="../src/TLuaInterpreter.cpp" line="12331"/>
      <source>object</source>
      <comment>object is the Mudlet alias/trigger/script, used in this sample message: object:&lt;Alias1&gt; function:&lt;cure_me&gt;</comment>
      <translation>对象</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="12320"/>
      <location filename="../src/TLuaInterpreter.cpp" line="12331"/>
      <source>function</source>
      <comment>function is the Lua function, used in this sample message: object:&lt;Alias1&gt; function:&lt;cure_me&gt;</comment>
      <translation>函数</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13804"/>
      <source>Some functions may not be available.</source>
      <translation>有些功能可能无法使用。</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13228"/>
      <source>No error message available from Lua</source>
      <translation>Lua没有错误消息</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13230"/>
      <source>Lua error: %1</source>
      <translation>Lua 错误: %1</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13232"/>
      <source>[ ERROR ] - Cannot find Lua module %1.%2%3%4</source>
      <comment>%1 is the name of the module;%2 will be a line-feed inserted to put the next argument on a new line;%3 is the error message from the lua sub-system;%4 can be an additional message about the expected effect (but may be blank).</comment>
      <translation>[ 错误 ] - 找不到 Lua 模块 %1.%2%3%4</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13246"/>
      <source>[  OK  ]  - Lua module %1 loaded.</source>
      <comment>%1 is the name (may specify which variant) of the module.</comment>
      <translation>[ 完成 ] -已加载Lua模块 %1。</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13791"/>
      <source>Probably will not be able to access Mudlet Lua code.</source>
      <translation>可能将无法访问 Mudlet Lua 代码。</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13809"/>
      <source>Database support will not be available.</source>
      <translation>数据库支持不可用。</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13816"/>
      <source>utf8.* Lua functions won&apos;t be available.</source>
      <translation>utf8.* Lua函数不可用。</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13822"/>
      <source>yajl.* Lua functions won&apos;t be available.</source>
      <translation>yajl.* Lua函数不可用。</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14003"/>
      <source>No error message available from Lua.</source>
      <translation>Lua没有提供可用的错误信息。</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14005"/>
      <source>Lua error: %1.</source>
      <translation>Lua 错误: %1.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14007"/>
      <source>[ ERROR ] - Cannot load code formatter, indenting functionality won&apos;t be available.
</source>
      <translation>[ 错误 ] - 无法加载代码格式化程序，缩进功能将不可用。
</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14084"/>
      <source>%1 (doesn&apos;t exist)</source>
      <comment>This file doesn&apos;t exist</comment>
      <translation>%1 (不存在)</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14089"/>
      <source>%1 (isn&apos;t a file or symlink to a file)</source>
      <translation>%1 (不是一个文件或文件的快捷方式)</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14098"/>
      <source>%1 (isn&apos;t a readable file or symlink to a readable file)</source>
      <translation>%1 (不是一个可读文件或文件的快捷方式)</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14116"/>
      <source>%1 (couldn&apos;t read file)</source>
      <comment>This file could not be read for some reason (for example, no permission)</comment>
      <translation>%1 (不能读取文件)</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14122"/>
      <source>[  OK  ]  - Mudlet-lua API &amp; Geyser Layout manager loaded.</source>
      <translation>[ 完成 ] - Mudlet-lua API &amp; Geyser Layout管理器已加载。</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14129"/>
      <source>[ ERROR ] - Couldn&apos;t find, load and successfully run LuaGlobal.lua - your Mudlet is broken!
Tried these locations:
%1</source>
      <translation>[ 错误 ] - 无法找到并成功加载 LuaGlobal.lua - 您的Mudlet已损坏!
已尝试以下位置:
%1</translation>
    </message>
  </context>
  <context>
    <name>TMainConsole</name>
    <message>
      <location filename="../src/TMainConsole.cpp" line="161"/>
      <source>logfile</source>
      <comment>Must be a valid default filename for a log-file and is used if the user does not enter any other value (Ensure all instances have the same translation {2 of 2}).</comment>
      <translation>日志文件</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="202"/>
      <source>Logging has started. Log file is %1
</source>
      <translation>记录已开始. 日志保存在%1
</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="212"/>
      <source>Logging has been stopped. Log file is %1
</source>
      <translation>记录已停止. 日志保存在%1
</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="242"/>
      <source>Mudlet MUD Client version: %1%2</source>
      <translation>Mudlet MUD 客户端版本: %1%2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="244"/>
      <source>Mudlet, log from %1 profile</source>
      <translation>Mudlet, 日志来自用户%1</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="280"/>
      <location filename="../src/TMainConsole.cpp" line="302"/>
      <source>&apos;Log session starting at &apos;hh:mm:ss&apos; on &apos;dddd&apos;, &apos;d&apos; &apos;MMMM&apos; &apos;yyyy&apos;.</source>
      <comment>This is the format argument to QDateTime::toString(...) and needs to follow the rules for that function {literal text must be single quoted} as well as being suitable for the translation locale</comment>
      <translation>&apos;日志会话开始于&apos;hh:mm:ss&apos; on &apos;dddd&apos;, &apos;d&apos; &apos;MMMM&apos; &apos;yyyy&apos;.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="307"/>
      <source>&lt;p&gt;Stop logging game output to log file.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;停止向日志文件写入游戏内容.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="311"/>
      <source>&apos;Log session ending at &apos;hh:mm:ss&apos; on &apos;dddd&apos;, &apos;d&apos; &apos;MMMM&apos; &apos;yyyy&apos;.</source>
      <comment>This is the format argument to QDateTime::toString(...) and needs to follow the rules for that function {literal text must be single quoted} as well as being suitable for the translation locale</comment>
      <translation>&apos;日志结束于&apos;hh:mm:ss&apos; on &apos;dddd&apos;, &apos;d&apos; &apos;MMMM&apos; &apos;yyyy&apos;.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="324"/>
      <source>&lt;p&gt;Start logging game output to log file.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;开始向日志文件写入游戏输出.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="637"/>
      <source>Pre-Map loading(2) report</source>
      <translation>加载地图前 (2) 的报告</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="647"/>
      <source>Loading map(2) at %1 report</source>
      <translation>加载地图中 (2) 的报告, 时间: %1</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1047"/>
      <source>User window - %1 - %2</source>
      <translation>用户窗口 - %1 - %2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1095"/>
      <source>N:%1 S:%2</source>
      <comment>The first argument &apos;N&apos; represents the &apos;N&apos;etwork latency; the second &apos;S&apos; the &apos;S&apos;ystem (processing) time</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1102"/>
      <source>&lt;no GA&gt; S:%1</source>
      <comment>The argument &apos;S&apos; represents the &apos;S&apos;ystem (processing) time, in this situation the Game Server is not sending &quot;GoAhead&quot; signals so we cannot deduce the network latency...</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1199"/>
      <source>Pre-Map loading(1) report</source>
      <translation>加载地图前 (1) 的报告</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1217"/>
      <source>Loading map(1) at %1 report</source>
      <translation>加载地图中 (1) 的报告，时间：%1</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1219"/>
      <source>Loading map(1) &quot;%1&quot; at %2 report</source>
      <translation>正在加载地图(1) &quot;%1&quot; 在 %2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1263"/>
      <source>Pre-Map importing(1) report</source>
      <translation>导入地图前 (1) 的报告</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1286"/>
      <source>[ ERROR ]  - Map file not found, path and name used was:
%1.</source>
      <translation>[错误] - 找不到地图文件, 使用的路径和文件名是: %1.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1292"/>
      <source>loadMap: bad argument #1 value (filename used: 
&quot;%1&quot; was not found).</source>
      <translation>loadMap: 错误的#1参数值 (找不到文件：&quot;%1&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1301"/>
      <source>[ INFO ]  - Map file located and opened, now parsing it...</source>
      <translation>[ 信息 ]  - 已找到并打开地图文件, 开始分析...</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1308"/>
      <source>Importing map(1) &quot;%1&quot; at %2 report</source>
      <translation>正在加载地图(1) &quot;%1&quot; 在 %2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1311"/>
      <source>[ INFO ]  - Map file located but it could not opened, please check permissions on:&quot;%1&quot;.</source>
      <translation>[ 信息 ] - 地图文件已找到，但无法打开，请检查许可权: &quot;%1&quot;。</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1314"/>
      <source>loadMap: bad argument #1 value (filename used: 
&quot;%1&quot; could not be opened for reading).</source>
      <translation>loadMap: 错误的#1参数值 (无法读取文件: &quot;%1&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1338"/>
      <source>[ INFO ]  - Map reload request received from system...</source>
      <translation>[ 信息 ]  - 系统收到重新加载地图的请求...</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1343"/>
      <source>[  OK  ]  - ... System Map reload request completed.</source>
      <translation>[ 完成 ] - ... 系统已完成重新加载地图的请求.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1345"/>
      <source>[ WARN ]  - ... System Map reload request failed.</source>
      <translation>[警告] - ... 系统重新加载地图失败.</translation>
    </message>
  </context>
  <context>
    <name>TMap</name>
    <message>
      <location filename="../src/TMap.cpp" line="210"/>
      <source>RoomID=%1 does not exist, can not set AreaID=%2 for non-existing room!</source>
      <translation>房间号=%1不存在, 不能为一个不存在的房间设置区域号%2!</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="221"/>
      <source>AreaID=%2 does not exist, can not set RoomID=%1 to non-existing area!</source>
      <translation>区域号=%2不存在, 不能为一个不存在的区域设置房间号%1!</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="469"/>
      <source>[ INFO ] - CONVERTING: old style label, areaID:%1 labelID:%2.</source>
      <translation>[ 信息 ]  - 转换: 旧版标签, 区域号: %1 标签号: %2.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="472"/>
      <source>[ INFO ] - Converting old style label id: %1.</source>
      <translation>[ 信息 ]  - 正在转换旧版标签, 标签号: %1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="477"/>
      <source>[ WARN ] - CONVERTING: cannot convert old style label in area with id: %1,  label id is: %2.</source>
      <translation>[警告] - 转换: 无法转换的旧版标签, 该标签位于区域: %1, 标签号: %2.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="480"/>
      <source>[ WARN ] - CONVERTING: cannot convert old style label with id: %1.</source>
      <translation>[警告] - 转换: 无法转换的旧版标签, 标签号: %1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="509"/>
      <source>[  OK  ]  - Auditing of map completed (%1s). Enjoy your game...</source>
      <translation>[ 完成 ]  - 审核地图完成(%1s). 祝游戏愉快...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="516"/>
      <source>[  OK  ]  - Map loaded successfully (%1s).</source>
      <translation>[ 完成 ] - 地图加载成功 (%1s).</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="987"/>
      <source>n</source>
      <comment>This translation converts the direction that DIR_NORTH codes for to a direction string that the game server will accept!</comment>
      <translation>n</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="988"/>
      <source>ne</source>
      <comment>This translation converts the direction that DIR_NORTHEAST codes for to a direction string that the game server will accept!</comment>
      <translation>ne</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="989"/>
      <source>e</source>
      <comment>This translation converts the direction that DIR_EAST codes for to a direction string that the game server will accept!</comment>
      <translation>e</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="990"/>
      <source>se</source>
      <comment>This translation converts the direction that DIR_SOUTHEAST codes for to a direction string that the game server will accept!</comment>
      <translation>se</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="991"/>
      <source>s</source>
      <comment>This translation converts the direction that DIR_SOUTH codes for to a direction string that the game server will accept!</comment>
      <translation>s</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="992"/>
      <source>sw</source>
      <comment>This translation converts the direction that DIR_SOUTHWEST codes for to a direction string that the game server will accept!</comment>
      <translation>sw</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="993"/>
      <source>w</source>
      <comment>This translation converts the direction that DIR_WEST codes for to a direction string that the game server will accept!</comment>
      <translation>w</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="994"/>
      <source>nw</source>
      <comment>This translation converts the direction that DIR_NORTHWEST codes for to a direction string that the game server will accept!</comment>
      <translation>nw</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="995"/>
      <source>up</source>
      <comment>This translation converts the direction that DIR_UP codes for to a direction string that the game server will accept!</comment>
      <translation>up</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="996"/>
      <source>down</source>
      <comment>This translation converts the direction that DIR_DOWN codes for to a direction string that the game server will accept!</comment>
      <translation>down</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="997"/>
      <source>in</source>
      <comment>This translation converts the direction that DIR_IN codes for to a direction string that the game server will accept!</comment>
      <translation>in</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="998"/>
      <source>out</source>
      <comment>This translation converts the direction that DIR_OUT codes for to a direction string that the game server will accept!</comment>
      <translation>out</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1037"/>
      <source>[ ALERT ] - Saving map in a format {%1} that is different than the one it was
loaded as {%2}. This may be an issue if you want to share the resulting
map with others relying on the original format.</source>
      <translation>[警告] - 当前用来保存地图的格式 {%1} 与原地图使用的格式 {%2} 不一致. 如果你想把保存后的地图分享给那些原地图格式的人, 这可能会导致问题.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="187"/>
      <source>[MAP ERROR:]%1
</source>
      <translation>[MAP 错误:]%1
</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="48"/>
      <source>Default Area</source>
      <translation>默认地区</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="49"/>
      <source>Unnamed Area</source>
      <translation>未命名的地区</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="439"/>
      <source>[ INFO ]  - Map audit starting...</source>
      <translation>[ 信息 ]  - 开始地图审核...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1021"/>
      <source>[ ERROR ] - The format {%1} you are trying to save the map with is too new
for this version of Mudlet. Supported are only formats up to version {%2}.</source>
      <translation>[ 错误 ] - 您尝试保存的地图格式{%1} 对于此版本的Mudlet而言太新
。 支持的格式仅为版本{%2}。</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1047"/>
      <source>[ WARN ]  - Saving map in a format {%1} different from the
recommended format {%2} for this version of Mudlet.</source>
      <translation>[ 警告 ] - 保存的地图格式 {%1} 不同于
当前Mudlet版本推荐的格式 {%2} 。</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1398"/>
      <location filename="../src/TMap.cpp" line="1753"/>
      <source>[ ERROR ] - Unable to open (for reading) map file: &quot;%1&quot;!</source>
      <translation>[ 错误 ] - 无法打开(读取) 地图文件: &quot;%1&quot;！</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1420"/>
      <source>[ ERROR ] - Map file is too new, its file format (%1) is higher than this version of
Mudlet can handle (%2)!  The file is:
&quot;%3&quot;.</source>
      <translation>[错误] - 地图文件版本太高, 其文件格式 (%1) 超出当前版本Mudlet可处理的范围 (%2)! 该文件是:
&quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1427"/>
      <source>[ INFO ]  - You will need to upgrade your Mudlet or find a map file saved in an
older format.</source>
      <translation>[ 信息 ]  - 你需要升级你的Mudlet, 或者另寻以旧格式存储的地图文件.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1434"/>
      <source>[ ALERT ] - Map file is really old, its file format (%1) is so ancient that
this version of Mudlet may not gain enough information from
it but it will try!  The file is: &quot;%2&quot;.</source>
      <translation>[ 提示 ] - 地图文件过于陈旧, 其过时的保存格式 (%1) 导致Mudlet无法从中获得足够的信息, 但Mudlet仍会尝试读取! 这个文件是: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1441"/>
      <source>[ INFO ]  - You might wish to donate THIS map file to the Mudlet Museum!
There is so much data that it DOES NOT have that you could be
better off starting again...</source>
      <translation>[ 信息 ]  - 也许你应该把这个地图文件捐赠给Mudlet博物馆!
这个地图文件已经缺少了太多数据, 你最好还是重新做一个...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1450"/>
      <source>[ INFO ]  - Reading map (format version:%1) file:
&quot;%2&quot;,
please wait...</source>
      <translation>[ 信息 ]  - 读取地图文件中 (格式版本: %1):
&quot;%2&quot;,
请稍等...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1451"/>
      <source>[ INFO ]  - Reading map (format version:%1) file: &quot;%2&quot;.</source>
      <translation>[ 信息 ]  - 读取地图文件中 (版本: %1) 文件: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1600"/>
      <source>[ INFO ]  - Default (reset) area (for rooms that have not been assigned to an
area) not found, adding reserved -1 id.</source>
      <translation>[ 信息 ]  - 找不到默认 (重置) 区域 (对某些尚未指定区域的房间) , 添加保留区域号-1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1694"/>
      <source>[ INFO ]  - Successfully read the map file (%1s), checking some
consistency details...</source>
      <translation>[ 信息 ]  - 读取地图文件成功 (%1s) , 正在检查某些细节的一致性...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1709"/>
      <source>No map found. Would you like to download the map or start your own?</source>
      <translation>找不到地图. 要下载一个或者制作你自己的地图吗?</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1710"/>
      <source>Download the map</source>
      <translation>下载地图</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1711"/>
      <source>Start my own</source>
      <translation>建立我的地图</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1769"/>
      <source>[ INFO ]  - Checking map file: &quot;%1&quot;, format version:%2...</source>
      <translation>[信息]-检查地图文件： &quot;%1&quot;, 版本：%2...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2157"/>
      <source>Map issues</source>
      <translation>地图问题</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2164"/>
      <source>Area issues</source>
      <translation>区域问题</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2170"/>
      <source>Area id: %1 &quot;%2&quot;</source>
      <translation>区域id: %1 &quot;%2&quot;</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2172"/>
      <source>Area id: %1</source>
      <translation>区域编号: %1</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2181"/>
      <source>Room issues</source>
      <translation>房间问题</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2188"/>
      <source>Room id: %1 &quot;%2&quot;</source>
      <translation>房间id: %1 &quot;%2&quot;</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2190"/>
      <source>Room id: %1</source>
      <translation>房间编号: %1</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2200"/>
      <source>End of report</source>
      <translation>报告结束</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2206"/>
      <source>[ ALERT ] - At least one thing was detected during that last map operation
that it is recommended that you review the most recent report in
the file:
&quot;%1&quot;
- look for the (last) report with the title:
&quot;%2&quot;.</source>
      <translation>[警告] - 在最近的地图操作中至少发现了一个问题
建议你检查最近的报告文件:
&quot;%1&quot;
- 找到 (最近一次的) 带有下面标题的报告:
&quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2214"/>
      <source>[ INFO ]  - The equivalent to the above information about that last map
operation has been saved for review as the most recent report in
the file:
&quot;%1&quot;
- look for the (last) report with the title:
&quot;%2&quot;.</source>
      <translation>[信息] - 关于上次地图操作的信息己保存在最近的报告文件中:
&quot;%1&quot;
- 找到 (最近一次的) 带有下面标题的报告:
&quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2270"/>
      <source>[ ERROR ] - Unable to use or create directory to store map.
Please check that you have permissions/access to:
&quot;%1&quot;
and there is enough space. The download operation has failed.</source>
      <translation>[ 错误 ] - 无法使用或创建目录来保存地图.
请检查您的访问权限：
&quot;%1&quot;
并且确认空间足够。下载失败。</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2296"/>
      <source>[ INFO ]  - Map download initiated, please wait...</source>
      <translation>[ 信息 ]  - 己开始下载地图, 请稍等...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2307"/>
      <source>Map download</source>
      <comment>This is a title of a progress window.</comment>
      <translation>地图下载</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2370"/>
      <source>Map import</source>
      <comment>This is a title of a progress dialog.</comment>
      <translation>地图导入</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2670"/>
      <location filename="../src/TMap.cpp" line="3141"/>
      <source>Exporting JSON map data from %1
Areas: %2 of: %3   Rooms: %4 of: %5   Labels: %6 of: %7...</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2685"/>
      <source>Map JSON export</source>
      <comment>This is a title of a progress window.</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2820"/>
      <source>Exporting JSON map file from %1 - writing data to file:
%2 ...</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2907"/>
      <source>Map JSON import</source>
      <comment>This is a title of a progress window.</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2892"/>
      <location filename="../src/TMap.cpp" line="3151"/>
      <source>Importing JSON map data to %1
Areas: %2 of: %3   Rooms: %4 of: %5   Labels: %6 of: %7...</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2306"/>
      <location filename="../src/TMap.cpp" line="2679"/>
      <location filename="../src/TMap.cpp" line="2901"/>
      <source>Abort</source>
      <translation>中止</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2304"/>
      <source>Downloading map file for use in %1...</source>
      <comment>%1 is the name of the current Mudlet profile</comment>
      <translation>正在下载地图文件 %1...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2338"/>
      <source>loadMap: unable to perform request, a map is already being downloaded or
imported at user request.</source>
      <translation>loadMap: 无法执行请求, 地图已在下载中或已被用户导入.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2369"/>
      <source>Importing XML map file for use in %1...</source>
      <translation>导入XML地图文件, 该文件用于%1...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2397"/>
      <source>loadMap: failure to import XML map file, further information may be available
in main console!</source>
      <translation>loadMap: 导入XML地图文件失败, 请前往主控制台查看更多信息!</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2432"/>
      <source>[ ALERT ] - Map download was canceled, on user&apos;s request.</source>
      <translation>[警告] - 根据用户请求取消下载地图</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2451"/>
      <source>[ ERROR ] - Map download encountered an error:
%1.</source>
      <translation>[错误] - 下载地图出错
%1</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2482"/>
      <source>[ ALERT ] - Map download failed, error reported was:
%1.</source>
      <translation>[警告] - 下载地图失败。报错：
%1</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2490"/>
      <source>[ ALERT ] - Map download failed, unable to open destination file:
%1.</source>
      <translation>[警告] - 下载地图失败, 无法打开目标文件: %1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2495"/>
      <source>[ ALERT ] - Map download failed, unable to write destination file:
%1.</source>
      <translation>[警告] - 下载地图失败, 无法写入目标文件: %1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2508"/>
      <location filename="../src/TMap.cpp" line="2525"/>
      <source>[ INFO ]  - ... map downloaded and stored, now parsing it...</source>
      <translation>[ 信息 ]  - ... 地图下载并存储完毕, 开始分析...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2516"/>
      <location filename="../src/TMap.cpp" line="2551"/>
      <source>[ ERROR ] - Map download problem, failure in parsing destination file:
%1.</source>
      <translation>[错误] - 地图下载出现错误, 分析目标文件失败: %1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2556"/>
      <source>[ ERROR ] - Map download problem, unable to read destination file:
%1.</source>
      <translation>[错误] - 地图下载出现错误, 无法读取目标文件: %1.</translation>
    </message>
  </context>
  <context>
    <name>TRoom</name>
    <message>
      <location filename="../src/TRoom.cpp" line="86"/>
      <location filename="../src/TRoom.cpp" line="971"/>
      <source>North</source>
      <translation>北</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="87"/>
      <source>North-east</source>
      <translation>东北</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="88"/>
      <source>North-west</source>
      <translation>西北</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="89"/>
      <location filename="../src/TRoom.cpp" line="1013"/>
      <source>South</source>
      <translation>南</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="90"/>
      <source>South-east</source>
      <translation>东南</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="91"/>
      <source>South-west</source>
      <translation>西南</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="92"/>
      <location filename="../src/TRoom.cpp" line="1055"/>
      <source>East</source>
      <translation>东</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="93"/>
      <location filename="../src/TRoom.cpp" line="1069"/>
      <source>West</source>
      <translation>西</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="94"/>
      <location filename="../src/TRoom.cpp" line="1083"/>
      <source>Up</source>
      <translation>上</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="95"/>
      <location filename="../src/TRoom.cpp" line="1097"/>
      <source>Down</source>
      <translation>下</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="96"/>
      <location filename="../src/TRoom.cpp" line="1111"/>
      <source>In</source>
      <translation>入口</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="97"/>
      <location filename="../src/TRoom.cpp" line="1125"/>
      <source>Out</source>
      <translation>出口</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="98"/>
      <source>Other</source>
      <translation>其他</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="100"/>
      <source>Unknown</source>
      <translation>未知</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="311"/>
      <source>No area created!  Requested area ID=%1. Note: Area IDs must be &gt; 0</source>
      <translation>无法创建区域! 请求的区域编号=%1. 注意: 区域编号必须 &gt; 0</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="333"/>
      <source>Warning: When setting the Area for Room (Id: %1) it did not have a current area!</source>
      <translation>警告: 正在为一个不属于任何区域的房间 (Id: %1) 设置区域!</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="985"/>
      <source>Northeast</source>
      <translation>东北</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="999"/>
      <source>Northwest</source>
      <translation>西北</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1027"/>
      <source>Southeast</source>
      <translation>东南</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1041"/>
      <source>Southwest</source>
      <translation>西南</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1146"/>
      <source>[ WARN ]  - In room id:%1 removing invalid (special) exit to %2 {with no name!}</source>
      <translation>[警告] - 正在删除房间: %1中通向房间 %2 的无效 (特殊的) 出口 {没有路径}.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1150"/>
      <source>[ WARN ]  - Room had an invalid (special) exit to %1 {with no name!} it was removed.</source>
      <translation>[警告] - 房间里有一个无效 (特别的) 出口 %1 {没有路径!}, 已删除该出口。</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1159"/>
      <source>[ INFO ]  - In room with id: %1 correcting special exit &quot;%2&quot; that
was to room with an exit to invalid room: %3 to now go
to: %4.</source>
      <translation>[信息] - 房间: %1 的特殊出口 &quot;%2&quot; 
通向了一个包含无效房间出口的房间: %3, 现已更正为: %4.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1169"/>
      <source>[ INFO ]  - Room needed correcting of special exit &quot;%1&quot; that was to room with an exit to invalid room: %2 to now go to: %3.</source>
      <translation>【信息】 - 需要更正特殊出口 &quot;%1&quot; 的房间，出口指向无效房间： %2更正为 %3.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1194"/>
      <source>[ WARN ]  - Room with id: %1 has a special exit &quot;%2&quot; with an
exit to: %3 but that room does not exist.  The exit will
be removed (but the destination room id will be stored in
the room user data under a key:
&quot;%4&quot;).</source>
      <translation>[警告] - 房间: %1 中的特殊出口 &quot;%2&quot; 通向
一个不存在的房间: %3. 该出口将被删除(但目标房间编号会被储存在
房间用户数据中的一个键下：
&quot;%4&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1207"/>
      <source>[ WARN ]  - Room has a special exit &quot;%1&quot; with an exit to: %2 but that room does not exist.  The exit will be removed (but the destination room id will be stored in the room user data under a key:&quot;%3&quot;).</source>
      <translation>【警告】 - 房间的特殊出口 &quot;%1&quot; 指向不存在的房间 %2。该出口将被删除（目标房间ID会被存储在房间用户数剧的关键字&quot;%3&quot; 中）。</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1246"/>
      <source>[ INFO ]  - In room with id: %1 special exit &quot;%2&quot;
that was to room with an invalid room: %3 that does not exist.
The exit will be removed (the bad destination room id will be stored in the
room user data under a key:
&quot;%4&quot;).</source>
      <translation>[警告] - 房间: %1 中的特殊出口 &quot;%2&quot; 通向
一个非法房间: %3. 该出口将被删除(但错误的目标房间编号会被储存在
房间用户数据中的这个键下：
&quot;%4&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1259"/>
      <source>[ INFO ]  - Room had special exit &quot;%1&quot; that was to room with an invalid room: %2 that does not exist.  The exit will be removed (the bad destination room id will be stored in the room user data under a key:&quot;%3&quot;).</source>
      <translation>【信息】 - 房间的特殊出口&quot;%1&quot; 指向不存在的房间： %2 。该出口将被删除（错误目标房间ID会被存储在房间用户数据的一个关键字:&quot;%3&quot; 中）。</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1292"/>
      <source>%1 {none}</source>
      <translation>%1 {none}</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1295"/>
      <source>%1 (open)</source>
      <translation>%1 (开着的)</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1298"/>
      <source>%1 (closed)</source>
      <translation>%1 (关上的)</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1301"/>
      <source>%1 (locked)</source>
      <translation>%1 (锁住的)</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1304"/>
      <source>%1 {invalid}</source>
      <translation>%1 {invalid}</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1308"/>
      <source>[ INFO ]  - In room with id: %1 found one or more surplus door items that were removed:
%2.</source>
      <translation>[ 信息 ]  - 在房间: %1 中发现了至少一项多余的门, 这些项已被删除:
%2.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1315"/>
      <source>[ INFO ]  - Room had one or more surplus door items that were removed:%1.</source>
      <translation>[ 信息 ]  - 已删除房间中至少一项多余的门:%1.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1331"/>
      <source>[ INFO ]  - In room with id: %1 found one or more surplus weight items that were removed:
%2.</source>
      <translation>[ 信息 ]  - 在房间: %1 中发现了至少一项多余的权值, 这些项已被删除:
%2.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1338"/>
      <source>[ INFO ]  - Room had one or more surplus weight items that were removed: %1.</source>
      <translation>[ 信息 ]  - 已删除房间中至少一项多余的权值:%1.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1354"/>
      <source>[ INFO ]  - In room with id: %1 found one or more surplus exit lock items that were removed:
%2.</source>
      <translation>[ 信息 ]  - 在房间: %1 中发现了至少一项多余的出口锁, 这些项已被删除:
%2.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1361"/>
      <source>[ INFO ]  - Room had one or more surplus exit lock items that were removed: %1.</source>
      <translation>[ 信息 ]  - 已删除房间中至少一项多余的出口锁:%1.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1440"/>
      <source>[ INFO ]  - In room with id: %1 found one or more surplus custom line elements that
were removed: %2.</source>
      <translation>[ 信息 ]  - 在房间: %1 中发现了至少一项多余的自定义行, 这些项已被删除:
%2.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1446"/>
      <source>[ INFO ]  - Room had one or more surplus custom line elements that were removed: %1.</source>
      <translation>[ 信息 ]  - 已删除房间中至少一项多余的自定义行:%1.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1469"/>
      <source>[ INFO ]  - In room with id: %1 correcting exit &quot;%2&quot; that was to room with
an exit to invalid room: %3 to now go to: %4.</source>
      <translation>[信息] - 房间: %1 的特殊出口 &quot;%2&quot; 
通向了一个包含非法房间出口的房间: %3, 现已更正为: %4.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1478"/>
      <source>[ INFO ]  - Correcting exit &quot;%1&quot; that was to invalid room id: %2 to now go to: %3.</source>
      <translation>【信息】 - 更正出口&quot;%1&quot; 该出口指向无效房间ID：%2 ，现在指向 %3。</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1489"/>
      <source>[ WARN ]  - Room with id: %1 has an exit &quot;%2&quot; to: %3 but that room
does not exist.  The exit will be removed (but the destination room
Id will be stored in the room user data under a key:
&quot;%4&quot;)
and the exit will be turned into a stub.</source>
      <translation>[警告] - 房间: %1 中的出口 &quot;%2&quot; 通向
一个不存在的房间: %3. 该出口将被删除(但目标房间编号会被储存在
房间用户数据中的这个键下：
&quot;%4&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1502"/>
      <source>[ WARN ]  - Room has an exit &quot;%1&quot; to: %2 but that room does not exist.  The exit will be removed (but the destination room id will be stored in the room user data under a key: &quot;%4&quot;) and the exit will be turned into a stub.</source>
      <translation>[ 警告 ] - 房间的出口 &quot;%1&quot; 指向不存在的房间%2。该出口将被删除（目标房间ID会存储在房间用户数级的一个关键字&quot;%4&quot; 中），该出口将被标记为未知。</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1546"/>
      <source>[ ALERT ] - Room with id: %1 has an exit &quot;%2&quot; to: %3 but also
has a stub exit!  As a real exit precludes a stub, the latter will
be removed.</source>
      <translation>[警告] - 房间: %1 中通向房间: %3 的出口 &quot;%2&quot; 同时也
通向一个未知房间! 由于未知房间不是一个真正的出口，后者将被删除。</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1556"/>
      <source>[ ALERT ] - Room has an exit &quot;%1&quot; to: %2 but also has a stub exit in the same direction!  As a real exit precludes a stub, the latter will be removed.</source>
      <translation>[ 提示 ] - 房间: %1 中有通向房间:  &quot;%2&quot; 的出口; 同时也
通向一个未知房间! 由于未知房间不是一个真正的出口，后者将被删除。</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1612"/>
      <source>[ INFO ]  - In room with id: %1 exit &quot;%2&quot; that was to room with an invalid
room: %3 that does not exist.  The exit will be removed (the bad destination
room id will be stored in the room user data under a key:
&quot;%4&quot;)
and the exit will be turned into a stub.</source>
      <translation>[警告] - 房间: %1 中的特殊出口 &quot;%2&quot; 通向
一个非法的不存在的房间: %3. 该出口将被删除(但错误的目标房间编号会被储存在
房间用户数据中的这个键下：
&quot;%4&quot;), 之后该出口会通向一个未知房间.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1623"/>
      <source>[ INFO ]  - Room exit &quot;%1&quot; that was to a room with an invalid id: %2 that does not exist.  The exit will be removed (the bad destination room id will be stored in the room user data under a key:&quot;%4&quot;) and the exit will be turned into a stub.</source>
      <translation>【信息】 - 房间的特殊出口&quot;%1&quot; 指向不存在的房间： %2 。该出口将被删除（错误目标房间ID会以一个关键字key被存储在房间用户数据:&quot;%4&quot; 中）并且出口将会被标记为未知.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1639"/>
      <source>
It was locked, this is recorded as user data with key:
&quot;%1&quot;.</source>
      <translation>
该出口被锁住了, 在用户数据中的键：
&quot;%1&quot; 下有记录.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1643"/>
      <source>  It was locked, this is recorded as user data with key: &quot;%1&quot;.</source>
      <translation>  已锁定，已被记录在用户数据中, Key: &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1651"/>
      <source>
It had a weight, this is recorded as user data with key:
&quot;%1&quot;.</source>
      <translation>
该出口已有权重, 在用户数据中的键：
&quot;%1&quot; 下有记录.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1655"/>
      <source>  It had a weight, this is recorded as user data with key: &quot;%1&quot;.</source>
      <translation>  该出口已有权重，以关键字 &quot;%1&quot; 记录在用户数据中。</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1666"/>
      <source>[ WARN ]  - There was a custom exit line associated with the invalid exit but
it has not been possible to salvage this, it has been lost!</source>
      <translation>[警告] - 有一个自定义路径线关联了非法出口, 该路径线没有任何用途, 已经被删除!</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1671"/>
      <source>[ WARN ]  - There was a custom exit line associated with the invalid exit but it has not been possible to salvage this, it has been lost!</source>
      <translation>[警告] - 有一个自定义路径线关联了非法出口, 该路径线没有任何用途, 已经被删除!</translation>
    </message>
  </context>
  <context>
    <name>TRoomDB</name>
    <message>
      <location filename="../src/TRoomDB.cpp" line="504"/>
      <source>Area with ID %1 already exists!</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="523"/>
      <source>An Unnamed Area is (no longer) permitted!</source>
      <translation>未命名的区域不 (再) 被允许!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="527"/>
      <source>An area called %1 already exists!</source>
      <translation>一个名为 %1 的区域已经存在！</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="626"/>
      <source>[ WARN ]  - Problem with data structure associated with room id: %1 - that
room&apos;s data has been lost so the id is now being deleted.  This
suggests serious problems with the currently running version of
Mudlet - is your system running out of memory?</source>
      <translation>[警告] - 与房间编号: %1 相关的数据结构出现了问题 - 该
房间的数据已丢失, 正在删除房间编号. 这
表明当前运行的
Mudlet 版本存在严重问题-您的系统内存不足吗?</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="634"/>
      <source>[ WARN ]  - Problem with data structure associated with this room.  The room&apos;s data has been lost so the id is now being deleted.  This suggests serious problems with the currently running version of Mudlet - is your system running out of memory?</source>
      <translation>[警告] - 与房间编号:  相关的数据结构出现了问题 - 该房间的数据已丢失, 正在删除房间编号. 这表明当前运行的Mudlet 版本存在严重问题-您的系统内存不足吗?</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="692"/>
      <source>[ ALERT ] - Area with id: %1 expected but not found, will be created.</source>
      <translation>[警告] - 区域: %1没有找到，将会被创建。</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="695"/>
      <source>[ ALERT ] - Area with this id expected but not found, will be created.</source>
      <translation>[警告] - 与此编号有关的区域没有找到, 将会被创建.</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/TRoomDB.cpp" line="724"/>
      <source>[ ALERT ] - %n area(s) detected as missing in map: adding it/them in.
 Look for further messsages related to the rooms that are supposed
 to be in this/these area(s)...</source>
      <comment>Making use of %n to allow quantity dependent message form 8-) !</comment>
      <translation>
        <numerusform>[警告] - 检测到 %n 个区域已丢失, 正在增加它们.
 请留意关于应该属于这些区域的
 房间的更多消息...</numerusform>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/TRoomDB.cpp" line="731"/>
      <source>[ ALERT ] - %n area(s) detected as missing in map: adding it/them in.
 Look for further messsages related to the rooms that is/are supposed to
 be in this/these area(s)...</source>
      <comment>Making use of %n to allow quantity dependent message form 8-) !</comment>
      <translation>
        <numerusform>[警告] - 检测到 %n 个区域已丢失, 正在增加它们.
 请留意关于应该属于这些区域的
 房间的更多消息...</numerusform>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/TRoomDB.cpp" line="740"/>
      <source>[ INFO ]  - The missing area(s) are now called:
(ID) ==&gt; &quot;name&quot;</source>
      <comment>Making use of %n to allow quantity dependent message form 8-) !</comment>
      <translation>
        <numerusform>[信息] - 缺少的区域现在被表示为：
(编号)==&gt; &quot;区域名字&quot;</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="775"/>
      <source>[ ALERT ] - Bad, (less than +1 and not the reserved -1) area ids found (count: %1)
in map, now working out what new id numbers to use...</source>
      <translation>[警告] - 在地图中发现了(%1) 个无效的房间编号(小于+1且不等于保留编号-1)
, 正在计算用于替换的新编号...</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="780"/>
      <source>[ ALERT ] - Bad, (less than +1 and not the reserved -1) area ids found (count: %1) in map!  Look for further messsages related to this for each affected area ...</source>
      <translation>[ 警告 ] - 在地图中发现了(%1) 个无效的区域编号(小于+1且不等于保留编号-1), 请留意针对这些无效区域的更多消息...</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="787"/>
      <source>[ INFO ]  - The renumbered area ids will be:
Old ==&gt; New</source>
      <translation>[信息] - 重置的区域编号将表示为：
旧编号==&gt; 新编号</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="805"/>
      <source>[ INFO ]  - The area with this bad id was renumbered to: %1.</source>
      <translation>[ 信息 ]  - 无效的区域编号已重置为: %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="806"/>
      <source>[ INFO ]  - This area was renumbered from the bad id: %1.</source>
      <translation>[ 信息 ]  - 该区域是由无效区域: %1重新编号形成的.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="843"/>
      <location filename="../src/TRoomDB.cpp" line="846"/>
      <source>[ INFO ]  - Area id numbering is satisfactory.</source>
      <translation>[ 信息 ]  - 区域编号是符合要求的.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="854"/>
      <source>[ ALERT ] - Bad, (less than +1) room ids found (count: %1) in map, now working
out what new id numbers to use.</source>
      <translation>[警告] - 在地图中发现了(%1) 个无效的房间编号(小于+1)
, 正在计算用于替换的新编号...</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="859"/>
      <source>[ ALERT ] - Bad, (less than +1) room ids found (count: %1) in map!  Look for further messsages related to this for each affected room ...</source>
      <translation>[ 警告 ] - 在地图中发现了(%1) 个无效的房间编号(小于+1)
, 请留意针对这些无效房间的更多消息...</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="866"/>
      <source>[ INFO ]  - The renumbered rooms will be:
</source>
      <translation>[ 信息 ]  - 重新编号的房间将会是:
</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="882"/>
      <source>[ INFO ]  - This room with the bad id was renumbered to: %1.</source>
      <translation>[ 信息 ]  - 无效的房间编号已重置为: %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="883"/>
      <source>[ INFO ]  - This room was renumbered from the bad id: %1.</source>
      <translation>[ 信息 ]  - 该房间是由无效房间: %1重新编号形成的.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="919"/>
      <location filename="../src/TRoomDB.cpp" line="922"/>
      <source>[ INFO ]  - Room id numbering is satisfactory.</source>
      <translation>[ 信息 ]  - 房间编号是符合要求的.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="946"/>
      <source>[ INFO ]  - Duplicate exit stub identifiers found in room id: %1, this is an
anomaly but has been cleaned up easily.</source>
      <translation>[ 信息 ]  - 在房间: %1中发现了重复的无效出口标识, 已清理该异常.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="951"/>
      <source>[ INFO ]  - Duplicate exit stub identifiers found in room, this is an anomaly but has been cleaned up easily.</source>
      <translation>[ 信息 ]  - 在房间中发现了重复的无效出口标识, 这是一个异常现象, 但是已被迅速地清理了.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="968"/>
      <source>[ INFO ]  - Duplicate exit lock identifiers found in room id: %1, this is an
anomaly but has been cleaned up easily.</source>
      <translation>[ 信息 ]  - 在房间: %1中发现了重复的出口锁标识, 这是一个
异常现象, 但是已被迅速地清理了.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="973"/>
      <source>[ INFO ]  - Duplicate exit lock identifiers found in room, this is an anomaly but has been cleaned up easily.</source>
      <translation>[ 信息 ]  - 在房间中发现了重复的无效出口标识, 这是一个异常现象, 但是已被迅速地清理了.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1060"/>
      <source>[ INFO ]  - This room claims to be in area id: %1, but that did not have a record of it.  The area has been updated to include this room.</source>
      <translation>[ 信息 ]  - 该房间应属于区域: %1，但是后者并没有它的记录. 为了添加该房间, 已对区域进行更新.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1066"/>
      <source>[ INFO ]  - In area with id: %1 there were %2 rooms missing from those it
should be recording as possessing, they were:
%3
they have been added.</source>
      <translation>[ 信息 ]  - 在被记录为属于区域: %1的房间
中有 %2 个房间已丢失, 它们是:
%3
它们已经被增加.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1074"/>
      <source>[ INFO ]  - In this area there were %1 rooms missing from those it should be recorded as possessing.  They are: %2.  They have been added.</source>
      <translation>[ 信息 ]  - 在被记录为属于该区域的房间中有 %1 个房间已丢失, 它们是: %2 它们已经被增加.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1099"/>
      <source>[ INFO ]  - This room was claimed by area id: %1, but it does not belong there.  The area has been updated to not include this room.</source>
      <translation>[ 信息 ]  - 区域: %1声称拥有该房间, 但是后者并不属于那里. 为了排除后者, 已对区域进行更新.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1105"/>
      <source>[ INFO ]  - In area with id: %1 there were %2 extra rooms compared to those it
should be recording as possessing, they were:
%3
they have been removed.</source>
      <translation>[ 信息 ]  - 在区域: %1中
中有 %2 个额外的没有被记录为属于该区域的房间, 它们是:
%3
它们已经被移除.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1113"/>
      <source>[ INFO ]  - In this area there were %1 extra rooms that it should not be recorded as possessing.  They were: %2.  They have been removed.</source>
      <translation>[ 信息 ]  - 在该区域中有 %1 个额外的房间被记录为不属于该区域, 它们是: %2 它们已经被移除.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1212"/>
      <source>It has been detected that &quot;_###&quot; form suffixes have already been used, for simplicity in the renaming algorithm these will have been removed and possibly changed as Mudlet sorts this matter out, if a number assigned in this way &lt;b&gt;is&lt;/b&gt; important to you, you can change it back, provided you rename the area that has been allocated the suffix that was wanted first...!&lt;/p&gt;</source>
      <translation>检测到&quot;_###&quot;样式的后缀已被使用，为简化重命名算法，这些后缀将被删除，在Mudlet解决这个问题时，这种方式会改变。如果这种方式分配的号码对你很&lt;b&gt;重要&lt;/b&gt;，只要能用得上，你可以把它改回来。。。!&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1216"/>
      <source>[  OK  ]  - The changes made are:
(ID) &quot;old name&quot; ==&gt; &quot;new name&quot;
</source>
      <translation>[好] - 所做的更改表示为:
(编号) &quot;旧名称&quot; ==&gt; &quot;新名称&quot;
</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1223"/>
      <source>&lt;nothing&gt;</source>
      <translation>&lt;无&gt;</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1226"/>
      <source>[ INFO ]  - Area name changed to prevent duplicates or unnamed ones; old name: &quot;%1&quot;, new name: &quot;%2&quot;.</source>
      <translation>[ 信息 ]  - 区域名称更改以防止重复或无效命名；原区域名称： &quot;%1&quot;，新区域名称： &quot;%2&quot;。</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1235"/>
      <source>[ ALERT ] - Empty and duplicate area names detected in Map file!</source>
      <translation>[警告] - 在地图文件中检测到空的和重复的区域名称!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1236"/>
      <source>[ INFO ]  - Due to some situations not being checked in the past,  Mudlet had
allowed the map to have more than one area with the same or no name.
These make some things confusing and are now disallowed.
  To resolve these cases, an area without a name here (or created in
the future) will automatically be assigned the name &quot;%1&quot;.
  Duplicated area names will cause all but the first encountered one
to gain a &quot;_###&quot; style suffix where each &quot;###&quot; is an increasing
number; you may wish to change these, perhaps by replacing them with
a &quot;(sub-area name)&quot; but it is entirely up to you how you do this,
other than you will not be able to set one area&apos;s name to that of
another that exists at the time.
  If there were more than one area without a name then all but the
first will also gain a suffix in this manner.
%2</source>
      <translation>[信息】- 因之前检查不完备，Mudlet允许地图上多个区域具有相同的名字或无命名。因导致的混乱，现已禁止。
为解决这个问题，一个无命名的区域（或新建的）将被自动命名为&quot;%1&quot;。
重复的区域名会导致除第一个外所有区域获得一个增量的&quot;_###&quot; 样式后缀。你可以改变这些前缀，改成&quot;（子区域名）&quot; 怎样修改完全取决于你。只是不能使用已存在的区域名。
如果多个区域无命名，则除第一个以外，其他所有区域都会获得这种方式的后缀。
%2</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1252"/>
      <source>[ ALERT ] - Duplicate area names detected in the Map file!</source>
      <translation>[警告] - 在地图文件中检测到重复的区域名称!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1253"/>
      <source>[ INFO ]  - Due to some situations not being checked in the past, Mudlet had
allowed the user to have more than one area with the same name.
These make some things confusing and are now disallowed.
  Duplicated area names will cause all but the first encountered one
to gain a &quot;_###&quot; style suffix where each &quot;###&quot; is an increasing
number; you may wish to change these, perhaps by replacing them with
a &quot;(sub-area name)&quot; but it is entirely up to you how you do this,
other then you will not be able to set one area&apos;s name to that of
another that exists at the time.
  If there were more than one area without a name then all but the
first will also gain a suffix in this manner.
%1)</source>
      <translation>[信息] - 过去, 由于没有考虑某些情况，Mudlet允许
地图中存在多个具有相同名字的区域.
这会让事情变得混乱, 现在已经不允许这么做了.
  重复的区域名称将导致除了第一个被处理的区域之外所有的
区域名称都以 &quot;_###&quot; 式的后缀结尾, 其中 &quot;###&quot; 是一个递增
数字; 或许你想改变这些后缀, 试试把后缀改成
一 &quot;(子区域名称)&quot; 至于具体怎么做, 完全取决于你,
只是之后你就不能把一个区域的名称设置成
与另一个已存在的区域相同的名称了.
  如果有多个没有名字的区域, 除了第一个区域之外所有的
区域名称也都以这样的后缀结尾.
%1)</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1268"/>
      <source>[ ALERT ] - An empty area name was detected in the Map file!</source>
      <translation>[警告] - 在地图文件中检测到空的区域名称!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1271"/>
      <source>[  OK  ]  - Due to some situations not being checked in the past, Mudlet had
allowed the map to have an area with no name. This can make some
things confusing and is now disallowed.
  To resolve this case, the area without a name here (or one created
in the future) will automatically be assigned the name &quot;%1&quot;.
  If this happens more then once the duplication of area names will
cause all but the first encountered one to gain a &quot;_###&quot; style
suffix where each &quot;###&quot; is an increasing number; you may wish to
change these, perhaps by adding more meaningful area names but it is
entirely up to you what is used, other then you will not be able to
set one area&apos;s name to that of another that exists at the time.</source>
      <translation>[信息] - 过去, 由于没有考虑某些情况，Mudlet允许
地图中存在未命名区域.
这会让事情变得混乱, 现在已经不允许这么做了.
  为了解决这个问题, 如果一个区域没有名字(或者等以后
再命名)系统将自动分配名称 &quot;%1&quot;.
  如果这样的未命名区域有很多个, 那么除了第一个被处理的区域之外所有的
区域名称都以 &quot;_###&quot; 式的后缀结尾, 其中 &quot;###&quot; 是一个递增
数字; 或许你想改变这些后缀, 试试把后缀改成
一 &quot;(子区域名称)&quot; 至于具体怎么做, 完全取决于你,
只是之后你就不能把一个区域的名称设置成
与另一个已存在的区域相同的名称了.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1295"/>
      <source>[ INFO ]  - Default (reset) area name (for rooms that have not been assigned to an
area) not found, adding &quot;%1&quot; against the reserved -1 id.</source>
      <translation>[信息] - 找不到默认 (重置) 区域 (对某些尚未指定区域的房间) , 将区域 &quot;%1&quot; 编号设置为保留区域号-1.</translation>
    </message>
  </context>
  <context>
    <name>TTextEdit</name>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1297"/>
      <source>Copy</source>
      <translation>复制</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1308"/>
      <source>Copy HTML</source>
      <translation>复制 HTML</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1312"/>
      <source>Copy as image</source>
      <translation>复制为图片</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1315"/>
      <source>Select All</source>
      <translation>全选</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1320"/>
      <source>Search on %1</source>
      <translation>搜索 %1</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1338"/>
      <source>Analyse characters</source>
      <translation>分析字符</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1347"/>
      <source>&lt;p&gt;Hover on this item to display the Unicode codepoints in the selection &lt;i&gt;(only the first line!)&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;鼠标悬停在该项目上，显示选中的Unicode代码 &lt;i&gt;（仅在第一行！）&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1356"/>
      <source>restore Main menu</source>
      <translation>恢复主菜单</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1358"/>
      <source>Use this to restore the Main menu to get access to controls.</source>
      <translation>点此恢复主菜单以获取对控件的访问.</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1360"/>
      <source>restore Main Toolbar</source>
      <translation>恢复主工具栏</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1362"/>
      <source>Use this to restore the Main Toolbar to get access to controls.</source>
      <translation>点此恢复主工具栏以获取对控件的访问.</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1438"/>
      <source>Mudlet, debug console extract</source>
      <translation>Mudlet, 调试控制台提取内容</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1440"/>
      <source>Mudlet, %1 mini-console extract from %2 profile</source>
      <translation>Mudlet, %1 迷你控制台提取内容, 来自 %2 配置文件</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1442"/>
      <source>Mudlet, %1 user window extract from %2 profile</source>
      <translation>Mudlet， %1 用户窗口从 %2 配置文件中提取</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1444"/>
      <source>Mudlet, main console extract from %1 profile</source>
      <translation>Mudlet，主控制台从 %1 配置文件中提取</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1912"/>
      <source>{tab}</source>
      <comment>Unicode U+0009 codepoint.</comment>
      <translation>{tab}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1913"/>
      <source>{line-feed}</source>
      <comment>Unicode U+000A codepoint. Not likely to be seen as it gets filtered out.</comment>
      <translation>{line-feed}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1914"/>
      <source>{carriage-return}</source>
      <comment>Unicode U+000D codepoint. Not likely to be seen as it gets filtered out.</comment>
      <translation>{carriage-return}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1915"/>
      <source>{space}</source>
      <comment>Unicode U+0020 codepoint.</comment>
      <translation>{space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1916"/>
      <source>{non-breaking space}</source>
      <comment>Unicode U+00A0 codepoint.</comment>
      <translation>{non-breaking space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1917"/>
      <source>{soft hyphen}</source>
      <comment>Unicode U+00AD codepoint.</comment>
      <translation>{soft hyphen}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1918"/>
      <source>{combining grapheme joiner}</source>
      <comment>Unicode U+034F codepoint (badly named apparently - see Wikipedia!)</comment>
      <translation>{combining grapheme joiner}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1919"/>
      <source>{ogham space mark}</source>
      <comment>Unicode U+1680 codepoint.</comment>
      <translation>{ogham space mark}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1920"/>
      <source>{&apos;n&apos; quad}</source>
      <comment>Unicode U+2000 codepoint.</comment>
      <translation>{&apos;n&apos; quad}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1921"/>
      <source>{&apos;m&apos; quad}</source>
      <comment>Unicode U+2001 codepoint.</comment>
      <translation>{&apos;m&apos; quad}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1922"/>
      <source>{&apos;n&apos; space}</source>
      <comment>Unicode U+2002 codepoint - En (&apos;n&apos;) wide space.</comment>
      <translation>{&apos;n&apos; space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1923"/>
      <source>{&apos;m&apos; space}</source>
      <comment>Unicode U+2003 codepoint - Em (&apos;m&apos;) wide space.</comment>
      <translation>{&apos;m&apos; space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1924"/>
      <source>{3-per-em space}</source>
      <comment>Unicode U+2004 codepoint - three-per-em (&apos;m&apos;) wide (thick) space.</comment>
      <translation>{3-per-em space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1925"/>
      <source>{4-per-em space}</source>
      <comment>Unicode U+2005 codepoint - four-per-em (&apos;m&apos;) wide (Middle) space.</comment>
      <translation>{4-per-em space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1926"/>
      <source>{6-per-em space}</source>
      <comment>Unicode U+2006 codepoint - six-per-em (&apos;m&apos;) wide (Sometimes the same as a Thin) space.</comment>
      <translation>{6-per-em space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1927"/>
      <source>{digit space}</source>
      <comment>Unicode U+2007 codepoint - figure (digit) wide space.</comment>
      <translation>{digit space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1928"/>
      <source>{punctuation wide space}</source>
      <comment>Unicode U+2008 codepoint.</comment>
      <translation>{punctuation wide space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1929"/>
      <source>{5-per-em space}</source>
      <comment>Unicode U+2009 codepoint - five-per-em (&apos;m&apos;) wide space.</comment>
      <translation>{5-per-em space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1930"/>
      <source>{hair width space}</source>
      <comment>Unicode U+200A codepoint - thinnest space.</comment>
      <translation>{hair width space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1931"/>
      <source>{zero width space}</source>
      <comment>Unicode U+200B codepoint.</comment>
      <translation>{zero width space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1932"/>
      <source>{Zero width non-joiner}</source>
      <comment>Unicode U+200C codepoint.</comment>
      <translation>{Zero width non-joiner}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1933"/>
      <source>{zero width joiner}</source>
      <comment>Unicode U+200D codepoint.</comment>
      <translation>{zero width joiner}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1934"/>
      <source>{left-to-right mark}</source>
      <comment>Unicode U+200E codepoint.</comment>
      <translation>{left-to-right mark}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1935"/>
      <source>{right-to-left mark}</source>
      <comment>Unicode U+200F codepoint.</comment>
      <translation>{right-to-left mark}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1936"/>
      <source>{line separator}</source>
      <comment>Unicode 0x2028 codepoint.</comment>
      <translation>{line separator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1937"/>
      <source>{paragraph separator}</source>
      <comment>Unicode U+2029 codepoint.</comment>
      <translation>{paragraph separator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1938"/>
      <source>{Left-to-right embedding}</source>
      <comment>Unicode U+202A codepoint.</comment>
      <translation>{Left-to-right embedding}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1939"/>
      <source>{right-to-left embedding}</source>
      <comment>Unicode U+202B codepoint.</comment>
      <translation>{right-to-left embedding}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1940"/>
      <source>{pop directional formatting}</source>
      <comment>Unicode U+202C codepoint - pop (undo last) directional formatting.</comment>
      <translation>{pop directional formatting}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1941"/>
      <source>{Left-to-right override}</source>
      <comment>Unicode U+202D codepoint.</comment>
      <translation>{Left-to-right override}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1942"/>
      <source>{right-to-left override}</source>
      <comment>Unicode U+202E codepoint.</comment>
      <translation>{right-to-left override}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1943"/>
      <source>{narrow width no-break space}</source>
      <comment>Unicode U+202F codepoint.</comment>
      <translation>{narrow width no-break space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1944"/>
      <source>{medium width mathematical space}</source>
      <comment>Unicode U+205F codepoint.</comment>
      <translation>{medium width mathematical space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1945"/>
      <source>{zero width non-breaking space}</source>
      <comment>Unicode U+2060 codepoint.</comment>
      <translation>{zero width non-breaking space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1946"/>
      <source>{function application}</source>
      <comment>Unicode U+2061 codepoint - function application (whatever that means!)</comment>
      <translation>{function application}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1947"/>
      <source>{invisible times}</source>
      <comment>Unicode U+2062 codepoint.</comment>
      <translation>{invisible times}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1948"/>
      <source>{invisible separator}</source>
      <comment>Unicode U+2063 codepoint - invisible separator or comma.</comment>
      <translation>{invisible separator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1949"/>
      <source>{invisible plus}</source>
      <comment>Unicode U+2064 codepoint.</comment>
      <translation>{invisible plus}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1950"/>
      <source>{left-to-right isolate}</source>
      <comment>Unicode U+2066 codepoint.</comment>
      <translation>{left-to-right isolate}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1951"/>
      <source>{right-to-left isolate}</source>
      <comment>Unicode U+2067 codepoint.</comment>
      <translation>{right-to-left isolate}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1952"/>
      <source>{first strong isolate}</source>
      <comment>Unicode U+2068 codepoint.</comment>
      <translation>{first strong isolate}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1953"/>
      <source>{pop directional isolate}</source>
      <comment>Unicode U+2069 codepoint - pop (undo last) directional isolate.</comment>
      <translation>{pop directional isolate}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1954"/>
      <source>{inhibit symmetrical swapping}</source>
      <comment>Unicode U+206A codepoint.</comment>
      <translation>{inhibit symmetrical swapping}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1955"/>
      <source>{activate symmetrical swapping}</source>
      <comment>Unicode U+206B codepoint.</comment>
      <translation>{activate symmetrical swapping}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1956"/>
      <source>{inhibit arabic form-shaping}</source>
      <comment>Unicode U+206C codepoint.</comment>
      <translation>{inhibit arabic form-shaping}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1957"/>
      <source>{activate arabic form-shaping}</source>
      <comment>Unicode U+206D codepoint.</comment>
      <translation>{activate arabic form-shaping}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1958"/>
      <source>{national digit shapes}</source>
      <comment>Unicode U+206E codepoint.</comment>
      <translation>{national digit shapes}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1959"/>
      <source>{nominal Digit shapes}</source>
      <comment>Unicode U+206F codepoint.</comment>
      <translation>{nominal Digit shapes}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1960"/>
      <source>{ideaographic space}</source>
      <comment>Unicode U+3000 codepoint - ideaographic (CJK Wide) space</comment>
      <translation>{ideaographic space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1961"/>
      <source>{variation selector 1}</source>
      <comment>Unicode U+FE00 codepoint.</comment>
      <translation>{variation selector 1}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1962"/>
      <source>{variation selector 2}</source>
      <comment>Unicode U+FE01 codepoint.</comment>
      <translation>{variation selector 2}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1963"/>
      <source>{variation selector 3}</source>
      <comment>Unicode U+FE02 codepoint.</comment>
      <translation>{variation selector 3}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1964"/>
      <source>{variation selector 4}</source>
      <comment>Unicode U+FE03 codepoint.</comment>
      <translation>{variation selector 4}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1965"/>
      <source>{variation selector 5}</source>
      <comment>Unicode U+FE04 codepoint.</comment>
      <translation>{variation selector 5}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1966"/>
      <source>{variation selector 6}</source>
      <comment>Unicode U+FE05 codepoint.</comment>
      <translation>{variation selector 6}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1967"/>
      <source>{variation selector 7}</source>
      <comment>Unicode U+FE06 codepoint.</comment>
      <translation>{variation selector 7}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1968"/>
      <source>{variation selector 8}</source>
      <comment>Unicode U+FE07 codepoint.</comment>
      <translation>{variation selector 8}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1969"/>
      <source>{variation selector 9}</source>
      <comment>Unicode U+FE08 codepoint.</comment>
      <translation>{variation selector 9}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1970"/>
      <source>{variation selector 10}</source>
      <comment>Unicode U+FE09 codepoint.</comment>
      <translation>{variation selector 10}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1971"/>
      <source>{variation selector 11}</source>
      <comment>Unicode U+FE0A codepoint.</comment>
      <translation>{variation selector 11}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1972"/>
      <source>{variation selector 12}</source>
      <comment>Unicode U+FE0B codepoint.</comment>
      <translation>{variation selector 12}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1973"/>
      <source>{variation selector 13}</source>
      <comment>Unicode U+FE0C codepoint.</comment>
      <translation>{variation selector 13}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1974"/>
      <source>{variation selector 14}</source>
      <comment>Unicode U+FE0D codepoint.</comment>
      <translation>{variation selector 14}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1975"/>
      <source>{variation selector 15}</source>
      <comment>Unicode U+FE0E codepoint - after an Emoji codepoint forces the textual (black &amp; white) rendition.</comment>
      <translation>{variation selector 15}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1976"/>
      <source>{variation selector 16}</source>
      <comment>Unicode U+FE0F codepoint - after an Emoji codepoint forces the proper coloured &apos;Emoji&apos; rendition.</comment>
      <translation>{variation selector 16}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1977"/>
      <source>{zero width no-break space}</source>
      <comment>Unicode U+FEFF codepoint - also known as the Byte-order-mark at start of text!).</comment>
      <translation>{zero width no-break space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1983"/>
      <source>{interlinear annotation anchor}</source>
      <comment>Unicode U+FFF9 codepoint.</comment>
      <translation>{interlinear annotation anchor}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1984"/>
      <source>{interlinear annotation separator}</source>
      <comment>Unicode U+FFFA codepoint.</comment>
      <translation>{interlinear annotation separator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1985"/>
      <source>{interlinear annotation terminator}</source>
      <comment>Unicode U+FFFB codepoint.</comment>
      <translation>{interlinear annotation terminator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1986"/>
      <source>{object replacement character}</source>
      <comment>Unicode U+FFFC codepoint.</comment>
      <translation>{object replacement character}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1998"/>
      <source>{noncharacter}</source>
      <comment>Unicode codepoint in range U+FFD0 to U+FDEF - not a character.</comment>
      <translation>{noncharacter}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2000"/>
      <source>{noncharacter}</source>
      <comment>Unicode codepoint in range U+FFFx - not a character.</comment>
      <translation>{noncharacter}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2009"/>
      <source>{FitzPatrick modifier 1 or 2}</source>
      <comment>Unicode codepoint U+0001F3FB - FitzPatrick modifier (Emoji Human skin-tone) 1-2.</comment>
      <translation>{FitzPatrick modifier 1 or 2}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2010"/>
      <source>{FitzPatrick modifier 3}</source>
      <comment>Unicode codepoint U+0001F3FC - FitzPatrick modifier (Emoji Human skin-tone) 3.</comment>
      <translation>{FitzPatrick modifier 3}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2011"/>
      <source>{FitzPatrick modifier 4}</source>
      <comment>Unicode codepoint U+0001F3FD - FitzPatrick modifier (Emoji Human skin-tone) 4.</comment>
      <translation>{FitzPatrick modifier 4}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2012"/>
      <source>{FitzPatrick modifier 5}</source>
      <comment>Unicode codepoint U+0001F3FE - FitzPatrick modifier (Emoji Human skin-tone) 5.</comment>
      <translation>{FitzPatrick modifier 5}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2013"/>
      <source>{FitzPatrick modifier 6}</source>
      <comment>Unicode codepoint U+0001F3FF - FitzPatrick modifier (Emoji Human skin-tone) 6.</comment>
      <translation>{FitzPatrick modifier 6}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2017"/>
      <source>{noncharacter}</source>
      <comment>Unicode codepoint is U+00xxFFFE or U+00xxFFFF - not a character.</comment>
      <translation>{noncharacter}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2288"/>
      <location filename="../src/TTextEdit.cpp" line="2350"/>
      <source>Index (UTF-16)</source>
      <comment>1st Row heading for Text analyser output, table item is the count into the QChars/TChars that make up the text {this translation used 2 times}</comment>
      <translation>索引 (UTF-16)</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2291"/>
      <location filename="../src/TTextEdit.cpp" line="2352"/>
      <source>U+&lt;i&gt;####&lt;/i&gt; Unicode Code-point &lt;i&gt;(High:Low Surrogates)&lt;/i&gt;</source>
      <comment>2nd Row heading for Text analyser output, table item is the unicode code point (will be between 000001 and 10FFFF in hexadecimal) {this translation used 2 times}</comment>
      <translation>U+&lt;i&gt;####&lt;/i&gt; Unicode Code-point &lt;i&gt;(High:Low Surrogates)&lt;/i&gt;</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2295"/>
      <location filename="../src/TTextEdit.cpp" line="2356"/>
      <source>Visual</source>
      <comment>3rd Row heading for Text analyser output, table item is a visual representation of the character/part of the character or a &apos;{&apos;...&apos;}&apos; wrapped letter code if the character is whitespace or otherwise unshowable {this translation used 2 times}</comment>
      <translation>外观</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2299"/>
      <location filename="../src/TTextEdit.cpp" line="2360"/>
      <source>Index (UTF-8)</source>
      <comment>4th Row heading for Text analyser output, table item is the count into the bytes that make up the UTF-8 form of the text that the Lua system uses {this translation used 2 times}</comment>
      <translation>索引 (UTF-8)</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2303"/>
      <location filename="../src/TTextEdit.cpp" line="2364"/>
      <source>Byte</source>
      <comment>5th Row heading for Text analyser output, table item is the unsigned 8-bit integer for the particular byte in the UTF-8 form of the text that the Lua system uses {this translation used 2 times}</comment>
      <translation>字节</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2307"/>
      <location filename="../src/TTextEdit.cpp" line="2368"/>
      <source>Lua character or code</source>
      <comment>6th Row heading for Text analyser output, table item is either the ASCII character or the numeric code for the byte in the row about this item in the table, as displayed the thing shown can be used in a Lua string entry to reproduce this byte {this translation used 2 times}</comment>
      <translation>Lua字符或代码</translation>
    </message>
  </context>
  <context>
    <name>TToolBar</name>
    <message>
      <location filename="../src/TToolBar.cpp" line="74"/>
      <source>Toolbar - %1 - %2</source>
      <translation>工具栏 - %1 - %2</translation>
    </message>
  </context>
  <context>
    <name>TTrigger</name>
    <message>
      <location filename="../src/TTrigger.cpp" line="191"/>
      <source>Error: This trigger has no patterns defined, yet. Add some to activate it.</source>
      <translation>错误：此触发器尚未定义模式。 添加模式以激活它。</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="222"/>
      <source>Error: in item %1, perl regex &quot;%2&quot; failed to compile, reason: &quot;%3&quot;.</source>
      <translation>错误：在项目 %1，perl regex &quot;%2&quot; 未能编译，原因是： &quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="243"/>
      <source>Error: in item %1, lua function &quot;%2&quot; failed to compile, reason: &quot;%3&quot;.</source>
      <translation>错误: 在项目 %1中， lua 函数 &quot;%2&quot; 编译失败，原因: &quot;%3&quot;。</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="263"/>
      <source>Error: in item %1, no colors to match were set - at least &lt;i&gt;one&lt;/i&gt; of the foreground or background must not be &lt;i&gt;ignored&lt;/i&gt;.</source>
      <translation>错误：在 %1中，未设定拟匹配的颜色。前景色或背景色&lt;i&gt;必须&lt;/i&gt;至少设定&lt;i&gt;其中之一&lt;/i&gt;</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="319"/>
      <location filename="../src/TTrigger.cpp" line="389"/>
      <source>[Trigger Error:] %1 capture group limit exceeded, capture less groups.
</source>
      <translation>触发错误：] %1 超出捕获组最大限制。
</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="1148"/>
      <source>Trigger name=%1 expired.
</source>
      <translation>触发器名称=%1 过期了.
</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/TTrigger.cpp" line="1151"/>
      <source>Trigger name=%1 will fire %n more time(s).
</source>
      <translation>
        <numerusform>触发器名称=%1 将被触发 %n 次.
</numerusform>
      </translation>
    </message>
  </context>
  <context>
    <name>UpdateDialog</name>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="20"/>
      <source>%APPNAME% update</source>
      <translation>%APPNAME% 更新</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="50"/>
      <source>Loading update information …</source>
      <translation>正在加载更新信息 …</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="87"/>
      <source>A new version of %APPNAME% is available!</source>
      <translation>有新的 %APPNAME% 版本可用！</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="113"/>
      <source>%APPNAME% %UPDATE_VERSION% is available (you have %CURRENT_VERSION%).
Would you like to update now?</source>
      <translation>%APPNAME% 已有最新的版本 %UPDATE_VERSION% (您当前版本为 %CURRENT_VERSION%)。
现在要更新吗?</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="151"/>
      <source>Changelog for %APPNAME%</source>
      <translation>Changelog for %APPNAME%</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="161"/>
      <source>You are using version %CURRENT_VERSION%.</source>
      <translation>您当前版本为 %CURRENT_VERSION%。</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="192"/>
      <source>There are currently no updates available.</source>
      <translation>当前没有可用的更新。</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="208"/>
      <source>You are using %APPNAME% %CURRENT_VERSION%.</source>
      <translation>您当前版本为 %APPNAME% %CURRENT_VERSION%</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="321"/>
      <source>Automatically download future updates</source>
      <translation>自动下载更新</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="368"/>
      <source>Cancel</source>
      <translation>取消</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="388"/>
      <source>Install update now</source>
      <translation>正在安装更新</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="395"/>
      <source>OK</source>
      <translation>好</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="405"/>
      <source>Remind me later</source>
      <translation>稍候再提示我</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="410"/>
      <source>Skip this version</source>
      <translation>忽略此版本</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.cpp" line="555"/>
      <source>Could not open downloaded file %1</source>
      <translation>无法打开下载的文件 %1</translation>
    </message>
  </context>
  <context>
    <name>Updater</name>
    <message>
      <location filename="../src/updater.cpp" line="46"/>
      <location filename="../src/updater.cpp" line="195"/>
      <location filename="../src/updater.cpp" line="261"/>
      <source>Update</source>
      <translation>更新</translation>
    </message>
    <message>
      <location filename="../src/updater.cpp" line="352"/>
      <source>Restart to apply update</source>
      <translation>重新启动使更新生效</translation>
    </message>
  </context>
  <context>
    <name>XMLimport</name>
    <message>
      <location filename="../src/XMLimport.cpp" line="164"/>
      <source>[ ALERT ] - Sorry, the file being read:
&quot;%1&quot;
reports it has a version (%2) it must have come from a later Mudlet version,
and this one cannot read it, you need a newer Mudlet!</source>
      <translation>[警告] - 对不起, 正在读取的文件：
&quot;%1&quot;
的版本号(%2) 表明它来自更高的Mudlet版本，
当前版本的Mudlet无法读取它, 你需要更新Mudlet!</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="348"/>
      <source>Parsing area data...</source>
      <translation>正在分析区域数据...</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="352"/>
      <source>Parsing room data...</source>
      <translation>正在分析房间数据...</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="356"/>
      <source>Parsing environment data...</source>
      <translation>正在分析环境数据...</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="364"/>
      <source>Assigning rooms to their areas...</source>
      <translation>正在为房间分配区域...</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="519"/>
      <source>Parsing room data [count: %1]...</source>
      <translation>正在分析房间数据 [数量: %1]...</translation>
    </message>
  </context>
  <context>
    <name>about_dialog</name>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="41"/>
      <source>About Mudlet</source>
      <translation>关于 Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="122"/>
      <source>Mudlet</source>
      <translation>Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="185"/>
      <source>Supporters</source>
      <translation>支持者</translation>
    </message>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="214"/>
      <source>License</source>
      <translation>License</translation>
    </message>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="249"/>
      <source>Third Party</source>
      <translation>第三方</translation>
    </message>
  </context>
  <context>
    <name>actions_main_area</name>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="62"/>
      <source>Name:</source>
      <translation>名称:</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="115"/>
      <source>Button Bar Properties</source>
      <translation>按钮栏属性</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="127"/>
      <source>Number of columns/rows (depending on orientation):</source>
      <translation>列数/行数(按排列方向):</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="150"/>
      <source>Orientation Horizontal</source>
      <translation>水平方向</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="155"/>
      <source>Orientation Vertical</source>
      <translation>垂直方向</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="170"/>
      <source>Dock Area Top</source>
      <translation>停靠区域顶部</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="175"/>
      <source>Dock Area Left</source>
      <translation>停靠区域左侧</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="180"/>
      <source>Dock Area Right</source>
      <translation>停靠区域右侧</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="185"/>
      <source>Floating Toolbar</source>
      <translation>浮动工具栏</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="208"/>
      <source>Button Properties</source>
      <translation>按钮属性</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="214"/>
      <source>Button Rotation:</source>
      <translation>按钮旋转:</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="231"/>
      <source>no rotation</source>
      <translation>不旋转</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="236"/>
      <source>90° rotation to the left</source>
      <translation>向左旋转 90°</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="241"/>
      <source>90° rotation to the right</source>
      <translation>向右旋转 90°</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="249"/>
      <source>Push down button</source>
      <translation>下拉按钮</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="256"/>
      <source>Command:</source>
      <translation>命令:</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="266"/>
      <source>&lt;p&gt;Type in one or more commands you want the button to send directly to the game if it is pressed. (Optional)&lt;/p&gt;&lt;p&gt;If this is a &lt;i&gt;push-down&lt;/i&gt; button then this is sent only when the button goes from the &lt;i&gt;up&lt;/i&gt; to &lt;i&gt;down&lt;/i&gt; state.&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation>&lt;p&gt;输入在按下按钮后你想直接发送到游戏的一个或多个命令. (可选) &lt;/p&gt;&lt;p&gt;如果这是一个 &lt;i&gt;下推&lt;/i&gt; 按钮, 命令只会在按钮状态从 &lt;i&gt;弹起&lt;/i&gt; 变成 &lt;i&gt;按下&lt;/i&gt; 时发送. &lt;/p&gt;&lt;p&gt;要发送更复杂的命令, 比如可能依赖或需要改变当前配置文件的变量的命令, 你应该输入Lua脚本, &lt;i&gt;而不是&lt;/i&gt; 在下面的编辑区输入命令. 输入编辑区的内容会原封不动地发送到游戏服务器. &lt;/p&gt;&lt;p&gt;你可以同时使用此区域 &lt;i&gt;和&lt;/i&gt; Lua脚本, 此区域中的内容会在Lua脚本运行 &lt;b&gt;之前&lt;/b&gt; 发送. &lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="269"/>
      <location filename="../src/ui/actions_main_area.ui" line="289"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="286"/>
      <source>&lt;p&gt;Type in one or more commands you want the button to send directly to the game when this button goes from the &lt;i&gt;down&lt;/i&gt; to &lt;i&gt;up&lt;/i&gt; state.&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation>&lt;p&gt;输入在按下按钮后你想直接发送到游戏的一个或多个命令, 这些命令会在按钮状态从 &lt;i&gt;弹起&lt;/i&gt; 变成 &lt;i&gt;按下&lt;/i&gt; 时发送. &lt;/p&gt;&lt;p&gt;要发送更复杂的命令, 比如可能依赖或需要改变当前配置文件的变量的命令, 你应该输入Lua脚本, &lt;i&gt;而不是&lt;/i&gt; 在下面的编辑区输入命令. 输入编辑区的内容会原封不动地发送到游戏服务器. &lt;/p&gt;&lt;p&gt;你可以同时使用此区域 &lt;i&gt;和&lt;/i&gt; Lua脚本, 此区域中的内容会在Lua脚本运行 &lt;b&gt;之前&lt;/b&gt; 发送. &lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="276"/>
      <source>Command (up):</source>
      <translation>命令 (向上):</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="72"/>
      <source>&lt;p&gt;Choose a good, ideally unique, name for your button, menu or toolbar. This will be displayed in the buttons tree.&lt;/p&gt;</source>
      <translation>&lt;p&gt;为你的按钮、菜单、工具栏选择一个好的、唯一的名字。它将显示在按钮树上。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="308"/>
      <source>Stylesheet:</source>
      <translation>样式表:</translation>
    </message>
  </context>
  <context>
    <name>aliases_main_area</name>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="35"/>
      <source>Name:</source>
      <translation>名称:</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="57"/>
      <source>choose a unique name for your alias; it will show in the tree and is needed for scripting.</source>
      <translation>为你的别名选择一个唯一的名字; 它会用在脚本中并显示在树状列表上.</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="76"/>
      <source>Pattern:</source>
      <translation>匹配:</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="103"/>
      <source>enter a perl regex pattern for your alias; alias are triggers on your input</source>
      <translation>为您的别名输入一个 perl 正则表达式; 别名是针对你输入内容的触发器.</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="110"/>
      <source>Type:</source>
      <translation>类型:</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="124"/>
      <source>Regex</source>
      <translation>正则表达式</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="129"/>
      <source>Plain</source>
      <translation>普通文本</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="149"/>
      <source>Command:</source>
      <translation>命令:</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="171"/>
      <source>&lt;p&gt;Type in one or more commands you want the alias to send directly to the game if the keys entered match the pattern. (Optional)&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation>&lt;p&gt;输入在触发别名时你想直接发送到游戏的一个或多个命令 (可选), 这些命令会在输入的按键匹配到别名时触发. &lt;/p&gt;&lt;p&gt; 要发送更复杂的命令, 比如可能依赖或需要改变当前配置文件的变量的命令, 你应该输入Lua脚本, &lt;i&gt;而不是&lt;/i&gt; 在下面的编辑区输入命令. 在这里输入的任何内容,只会原封不动地发送到游戏服务器. &lt;/p&gt;&lt;p&gt;你可以同时使用此区域 &lt;i&gt;和&lt;/i&gt; Lua脚本, 此区域中的内容会在Lua脚本运行 &lt;b&gt;之前&lt;/b&gt; 发送. &lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="174"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>cTelnet</name>
    <message>
      <location filename="../src/ctelnet.cpp" line="609"/>
      <source>[ INFO ]  - The IP address of %1 has been found. It is: %2
</source>
      <translation>[ 信息 ]  - IP地址 %1 已经找到. 它是: %2
</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="618"/>
      <source>[ ERROR ] - Host name lookup Failure!
Connection cannot be established.
The server name is not correct, not working properly,
or your nameservers are not working properly.</source>
      <translation>[ 错误 ] - 主机名称查找失败!
无法建立连接.
服务器名称不正确, 不能正常工作,
或者你的域名服务器没有正常工作.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="449"/>
      <source>[ ERROR ] - TCP/IP socket ERROR:</source>
      <translation>[ 错误 ] - TCP/IP socket 错误：</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="476"/>
      <source>[ INFO ]  - A secure connection has been established successfully.</source>
      <translation>[ 信息 ] -已成功建立安全连接。</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="478"/>
      <source>[ INFO ]  - A connection has been established successfully.</source>
      <translation>[ 信息 ] -已成功建立连接。</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="514"/>
      <source>[ INFO ]  - Connection time: %1
    </source>
      <translation>[ 信息 ] - 连接时间: %1
    </translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="557"/>
      <source>Secure connections aren&apos;t supported by this game on this port - try turning the option off.</source>
      <translation>当前游戏端口不支持安全连接 - 尝试关闭该选项</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="602"/>
      <source>[ INFO ]  - Trying secure connection to %1: %2 ...
</source>
      <translation>[ 信息 ] - 尝试安全连接到 %1: %2 ...
</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1647"/>
      <location filename="../src/ctelnet.cpp" line="2014"/>
      <source>[ INFO ]  - The server wants to upgrade the GUI to new version &apos;%1&apos;.
Uninstalling old version &apos;%2&apos;.</source>
      <translation>[ 信息 ] - 服务器尝试把GUI升级到新版本 &apos;%1&apos;. 正在删除旧版本 &apos;%2&apos;.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1658"/>
      <location filename="../src/ctelnet.cpp" line="2025"/>
      <source>[  OK  ]  - Package is already installed.</source>
      <translation>[ 完成 ] -软件包已安装。</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1667"/>
      <location filename="../src/ctelnet.cpp" line="2034"/>
      <source>downloading game GUI from server</source>
      <translation>正从服务器中下载游戏GUI</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1667"/>
      <location filename="../src/ctelnet.cpp" line="2034"/>
      <source>Cancel</source>
      <comment>Cancel download of GUI package from Server</comment>
      <translation>取消</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1656"/>
      <location filename="../src/ctelnet.cpp" line="2023"/>
      <source>[ INFO ]  - Server offers downloadable GUI (url=&apos;%1&apos;) (package=&apos;%2&apos;).</source>
      <translation>[ 信息 ] - 服务器提供可供下载的 GUI (url=&apos;%1&apos;)(package=&apos;%2&apos;).</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="418"/>
      <source>[ INFO ]  - Looking up the IP address of server: %1:%2 ...</source>
      <translation>[ 信息 ]  - 正在查找服务器的 IP 地址: %1:%2 ...</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="516"/>
      <source>hh:mm:ss.zzz</source>
      <comment>This is the format to be used to show the profile connection time, it follows the rules of the &quot;QDateTime::toString(...)&quot; function and may need modification for some locales, e.g. France, Spain.</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="547"/>
      <location filename="../src/ctelnet.cpp" line="559"/>
      <source>[ ALERT ] - Socket got disconnected.
Reason: </source>
      <translation>[ 提示 ] - Socket连接已断开。
原因： </translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="611"/>
      <source>[ INFO ]  - Trying to connect to %1:%2 ...
</source>
      <translation>[ 信息 ]  - 正在尝试连接到 %1: %2 ...
</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="613"/>
      <source>[ INFO ]  - Trying to connect to %1:%2 via proxy...
</source>
      <translation>[ 信息 ]  - 正在尝试通过via代理连接到 %1:%2 ...
</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="660"/>
      <source>[ ERROR ] - Internal error, no codec found for current setting of {&quot;%1&quot;}
so Mudlet cannot send data in that format to the Game Server. Please
check to see if there is an alternative that the MUD and Mudlet can
use. Mudlet will attempt to send the data using the ASCII encoding
but will be limited to only unaccented characters of basic English.
Note: this warning will only be issued once, until the encoding is
changed.</source>
      <translation>[ ERROR ] - 内部错误，没有找到当前设置的{&quot;%1&quot;} 的编码解码器。
因此Mudlet不能以这种格式向游戏服务器发送数据。
请检查是否有MUD和Mudlet可以
使用的替代方式。Mudlet将尝试使用ASCII编码
发送数据，但将仅限于基本英语的无重音字符。
注意：该警告只会发出一次，直到编码改变。</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2316"/>
      <source>ERROR</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>错误</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2328"/>
      <source>LUA</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>LUA</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2339"/>
      <source>WARN</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>警告</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2350"/>
      <source>ALERT</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>警告</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2361"/>
      <source>INFO</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>信息</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2372"/>
      <source>OK</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>好</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2555"/>
      <source>[ INFO ]  - Loading replay file:
&quot;%1&quot;.</source>
      <translation>[信息] - 正在加载重播文件:
&quot;%1&quot;。</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2574"/>
      <source>Cannot perform replay, another one may already be in progress. Try again when it has finished.</source>
      <translation>无法执行重放，另一个进程可能正在使用。 请在它完成后重试。</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2576"/>
      <source>[ WARN ]  - Cannot perform replay, another one may already be in progress.
Try again when it has finished.</source>
      <translation>[ 警告 ] - 不能执行重播, 另一个重播可能已经在进行中，
请等它完成后再次尝试.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2584"/>
      <source>Cannot read file &quot;%1&quot;, error message was: &quot;%2&quot;.</source>
      <translation>无法读取文件 &quot;%1&quot;，错误消息为: &quot;%2&quot;。</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2587"/>
      <source>[ ERROR ] - Cannot read file &quot;%1&quot;,
error message was: &quot;%2&quot;.</source>
      <translation>[错误] - 无法读取文件 &quot;%1&quot;,
错误信息是： &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2615"/>
      <source>[  OK  ]  - The replay has ended.</source>
      <translation>[ 完成 ] - 重播已结束.</translation>
    </message>
  </context>
  <context>
    <name>color_trigger</name>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="17"/>
      <source>ANSI 256 Color chooser</source>
      <translation>ANSI 256颜色选择器</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="39"/>
      <source>&lt;small&gt;Choose:&lt;ul&gt;&lt;li&gt;one of the basic 16 colors below&lt;/li&gt;
&lt;li&gt;click the &lt;i&gt;more&lt;/i&gt; button to get access to other colors in the 256-color set, then follow the instructions to select a color from that part of the 256 colors supported; if such a color is already in use then that part will already be showing&lt;/li&gt;
&lt;li&gt;click the &lt;i&gt;Default&lt;/i&gt; or &lt;i&gt;Ignore&lt;/i&gt; buttons at the bottom for a pair of other special cases&lt;/li&gt;
&lt;li&gt;click &lt;i&gt;Cancel&lt;/i&gt; to close this dialog without making any changes&lt;/li&gt;&lt;/ul&gt;&lt;/small&gt;</source>
      <comment>Ensure that &quot;Default&quot;, &quot;Ignore&quot; and &quot;Cancel&quot; in this instruction are the same as used for the controls elsewhere on this dialog.</comment>
      <translation>&lt;small&gt;选择:&lt;ul&gt;&lt;li&gt;下列16个基本色中的一个&lt;/li&gt;
&lt;li&gt;点击 &lt;i&gt;更多&lt;/i&gt; 按钮可进入 256 色选择项, 按照接下来的指令选择256色中的一种; 如果该颜色已经被使用, 那么这一部分将会被显示出来&lt;/li&gt;
&lt;li&gt;点击 &lt;i&gt;默认&lt;/i&gt; 或 &lt;i&gt;忽略&lt;/i&gt; 按钮 将使用默认设定&lt;/li&gt;
&lt;li&gt;点击 &lt;i&gt;取消&lt;/i&gt; 将关闭该对话框并不作任何修改&lt;/li&gt;&lt;/ul&gt;&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="58"/>
      <source>Basic ANSI Colors [0-15] - click a button to select that color number directly:</source>
      <translation>基本 ANSI 颜色 [0-15] - 点击一个按钮直接选择该颜色编号：</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="240"/>
      <source>ANSI 6R x 6G x 6B Colors [16-231] - adjust red, green, blue and click button to select matching color number:</source>
      <translation>ANSI 6R x 6G x 6B Colors [16-231] - 调整红色，绿色，蓝色或单击按钮以选择匹配的颜色编号:</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="252"/>
      <source>Red (0-5)</source>
      <translation>红色 (0-5)</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="262"/>
      <source>Green (0-5)</source>
      <translation>绿色 (0-5)</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="272"/>
      <source>Blue (0-5)</source>
      <translation>蓝色 (0-5)</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="282"/>
      <source>16 + 36 x R + 6 x G + B =</source>
      <translation>16 + 36 x R + 6 x G + B =</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="343"/>
      <source>[16]</source>
      <translation>[16]</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="353"/>
      <source>Set to RGB value</source>
      <translation>设置为 RGB 值</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="363"/>
      <source>ANSI 24 Grays scale [232-255] - adjust gray and click button to select matching color number:</source>
      <translation>ANSI 24 灰色刻度 [232-255] -调整灰色，并单击按钮选择匹配的颜色编号：</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="375"/>
      <source>Gray (0-23)</source>
      <translation>灰色 (0-23)</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="382"/>
      <source>232 + Gr =</source>
      <translation>232 + Gr =</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="414"/>
      <source>[232]</source>
      <translation>[232]</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="424"/>
      <source>Set to Grayscale value</source>
      <translation>设置为灰度值</translation>
    </message>
  </context>
  <context>
    <name>composer</name>
    <message>
      <location filename="../src/ui/composer.ui" line="14"/>
      <source>News and Message Composer</source>
      <translation>新闻和信息编写器</translation>
    </message>
    <message>
      <location filename="../src/ui/composer.ui" line="86"/>
      <source>Cancel</source>
      <translation>取消</translation>
    </message>
    <message>
      <location filename="../src/ui/composer.ui" line="99"/>
      <source>&lt;p&gt;Save (&lt;span style=&quot; color:#565656;&quot;&gt;Shift+Tab&lt;/span&gt;)&lt;/p&gt;</source>
      <translation>&lt;p&gt;保存 (&lt;span style=&quot; color:#565656;&quot;&gt;Shift+Tab&lt;/span&gt;)&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/composer.ui" line="102"/>
      <source>Save</source>
      <translation>保存</translation>
    </message>
  </context>
  <context>
    <name>connection_profiles</name>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="20"/>
      <source>Select a profile to connect with</source>
      <translation>选择配置文件进行连接</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="101"/>
      <source>profiles list</source>
      <translation>配置文件列表</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="363"/>
      <source>Remove</source>
      <translation>移除</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="382"/>
      <source>Copy</source>
      <translation>复制</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="407"/>
      <source>New</source>
      <translation>新建</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="462"/>
      <source>welcome message</source>
      <translation>欢迎信息</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="478"/>
      <source>Required</source>
      <translation>必填项</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="484"/>
      <source>Profile name:</source>
      <translation>配置名称:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="500"/>
      <source>Profile name</source>
      <translation>配置名称</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="503"/>
      <source>A unique name for the profile but which is limited to a subset of ascii characters only.</source>
      <comment>Using lower case letters for &apos;ASCII&apos; may make speech synthesisers say &apos;askey&apos; which is quicker than &apos;Aay Ess Cee Eye Eye&apos;!</comment>
      <translation>配置文件的唯一名称，但仅限于ascii字符的子集。</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="513"/>
      <source>Server address:</source>
      <translation>服务器地址:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="535"/>
      <source>Game server URL</source>
      <translation>游戏服务器URL</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="538"/>
      <source>The Internet host name or IP address</source>
      <translation>服务器主机名或IP地址</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="545"/>
      <source>Port:</source>
      <translation>端口:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="573"/>
      <source>Game server port</source>
      <translation>游戏服务器端口</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="576"/>
      <source>The port that is used together with the server name to make the connection to the game server. If not specified a default of 23 for &quot;Telnet&quot; connections is used. Secure connections may require a different port number.</source>
      <translation>端口需要和服务器名称一起用于连接到游戏服务器。如果未指定端口号，则使用&quot;Telnet&quot;连接的默认值23。安全连接可能需要另外的端口号。</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="595"/>
      <source>Connect via a secure protocol</source>
      <translation>通过安全协议进行连接</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="598"/>
      <source>Make Mudlet use a secure SSL/TLS protocol instead of an unencrypted one</source>
      <translation>让Mudlet使用安全的SSL/TLS协议，而不是未加密的协议。</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="604"/>
      <source>Secure:</source>
      <translation>安全：</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="611"/>
      <source>Profile history:</source>
      <translation>配置历史:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="634"/>
      <source>load newest profile</source>
      <translation>加载最新配置文件</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="639"/>
      <source>load oldest profile</source>
      <translation>加载最早的配置文件</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="662"/>
      <source>Optional</source>
      <translation>可选项</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="678"/>
      <source>Character name:</source>
      <translation>角色名字:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="688"/>
      <source>The characters name</source>
      <translation>人物名字</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="691"/>
      <source>Character name</source>
      <translation>角色名字</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="694"/>
      <source>If provided will be sent, along with password to identify the user in the game.</source>
      <translation>如果提供密码的话，将会发送密码以识别游戏中的用户。</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="713"/>
      <source>Auto-open profile</source>
      <translation>自动打开配置文件</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="716"/>
      <source>Automatically start this profile when Mudlet is run</source>
      <translation>当Mudlet运行时，自动启动此配置文件。</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="729"/>
      <source>Auto-reconnect</source>
      <translation>自动重连</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="732"/>
      <source>Automatically reconnect this profile if it should become disconnected for any reason other than the user disconnecting from the game server.</source>
      <translation>自动重新连接此配置文件，除非用户断开与游戏服务器的连接。</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="748"/>
      <source>Password</source>
      <translation>密码</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="751"/>
      <source>If provided will be sent, along with the character name to identify the user in the game.</source>
      <translation>如果提供用户名的话，将会发送至游戏中。</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="764"/>
      <source>Enable Discord integration (not supported by game)</source>
      <translation>启用Discord整合 (不被游戏支持)</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="770"/>
      <source>Allow this profile to use Mudlet&apos;s Discord &quot;Rich Presence&quot;  features</source>
      <translation>允许该配置文件使用Mudlet的 Discord Rich Presence  功能。</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="876"/>
      <location filename="../src/ui/connection_profiles.ui" line="879"/>
      <source>Game description or your notes</source>
      <translation>游戏描述或注释</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="668"/>
      <source>Password:</source>
      <translation>密码:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="745"/>
      <source>Characters password. Note that the password isn&apos;t encrypted in storage</source>
      <translation>角色密码. 注意, 密码以明文存储存.</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="710"/>
      <source>With this enabled, Mudlet will automatically start and connect on this profile when it is launched</source>
      <translation>激活后, Mudlet在启动时会自动加载此配置文件并连接</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="722"/>
      <source>Open profile on Mudlet start</source>
      <translation>在Mudlet启动时开启此配置</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="738"/>
      <source>Reconnect automatically</source>
      <translation>自动重连</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="767"/>
      <source>Discord integration</source>
      <translation>Discord 集成</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="805"/>
      <source>Informational</source>
      <translation>更多信息</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="832"/>
      <source>Website:</source>
      <translation>网站:</translation>
    </message>
  </context>
  <context>
    <name>custom_line_properties</name>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="27"/>
      <source>Custom Line Properties [*]</source>
      <translation>自定义路径线属性 [*]</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="46"/>
      <source>Line Settings:</source>
      <translation>路径线设置:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="84"/>
      <source>Color:</source>
      <translation>颜色：</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="58"/>
      <source>Style:</source>
      <translation>样式:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="43"/>
      <source>&lt;p&gt;Select Style, Color and whether to end the line with an arrow head.&lt;/p&gt;</source>
      <translation>&lt;p&gt;选择样式，颜色以及是否使用箭头结束一行。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="122"/>
      <source>Ends with an arrow:</source>
      <translation>以箭头结尾:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="138"/>
      <source>Exit Details:</source>
      <translation>出口细节:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="153"/>
      <source>Origin:</source>
      <translation>起点:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="226"/>
      <source>Destination:</source>
      <translation>目的地:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="188"/>
      <source>    Direction/Command:</source>
      <translation>    方向/命令:</translation>
    </message>
  </context>
  <context>
    <name>custom_lines</name>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="14"/>
      <source>Custom Line selection</source>
      <translation>自定义路径线选区:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="44"/>
      <source>Choose line format, color and arrow option and then select the exit to start drawing</source>
      <translation>选择路径线的格式, 颜色和箭头选项然后选择出口开始绘图</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="63"/>
      <source>Line Settings:</source>
      <translation>路径线设置:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="97"/>
      <source>Ends with an arrow:</source>
      <translation>以箭头结尾:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="110"/>
      <source>Style:</source>
      <translation>样式:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="126"/>
      <source>Color:</source>
      <translation>颜色：</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="47"/>
      <source>&lt;p&gt;Selecting an exit immediately proceeds to drawing the first line segment from the centre point of the room.&lt;/p&gt;</source>
      <translation>&lt;p&gt;选择一个出口会立即从房间中心绘制出第一条线段.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="60"/>
      <source>&lt;p&gt;Select Style, Color and whether to end the line with an arrow head BEFORE then choosing the exit to draw the line for...&lt;/p&gt;</source>
      <translation>&lt;p&gt;选择样式, 颜色以及是否在线条结尾前显示箭头, 然后选择退出以绘制线条...&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="187"/>
      <source>&lt;p&gt;Select a normal exit to commence drawing a line for it, buttons are shown depressed if they already have such a custom line and disabled if there is not exit in that direction.&lt;/p&gt;</source>
      <translation>&lt;p&gt;选择一个出口并开始为它绘制一条路径, 如果这些出口已经有这样的自定义路径了, 按钮会显示为按下状态, 如果该方向没有出口, 按钮会显示为不可用状态.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="190"/>
      <source>Normal Exits:</source>
      <translation>普通出口:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="212"/>
      <source>NW</source>
      <translation>西北</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="235"/>
      <source>N</source>
      <translation>北</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="258"/>
      <source>NE</source>
      <translation>东北</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="297"/>
      <source>UP</source>
      <translation>上</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="336"/>
      <source>W</source>
      <translation>西</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="346"/>
      <source>E</source>
      <translation>东</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="356"/>
      <source>IN</source>
      <translation>进入</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="382"/>
      <source>OUT</source>
      <translation>出去</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="392"/>
      <source>SW</source>
      <translation>西南</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="402"/>
      <source>S</source>
      <translation>南</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="412"/>
      <source>SE</source>
      <translation>东南</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="422"/>
      <source>DOWN</source>
      <translation>下</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="444"/>
      <source>&lt;p&gt;Select a special exit to commence drawing a line for it, the first column is checked if the exit already has such a custom line.&lt;/p&gt;</source>
      <translation>&lt;p&gt;选择一个特殊的出口并开始绘制一条路径, 如果一个出口已经拥有了这样一条自定义路径, 第一列会显示为勾选状态.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="503"/>
      <source>&lt;p&gt;Indicates if there is already a custom line for this special exit, will be replaced if the exit is selected.&lt;/p&gt;</source>
      <translation>&lt;p&gt;指明该特殊出口是否已经拥有一条自定义路径, 选择该出口后自定义路径会被替换.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="514"/>
      <source>&lt;p&gt;The room this special exit leads to.&lt;/p&gt;</source>
      <translation>&lt;p&gt;此特殊房间出口通往 &lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="525"/>
      <source>&lt;p&gt;The command or LUA script that goes to the given room.&lt;/p&gt;</source>
      <translation>&lt;p&gt;通往指定房间的命令或LUA脚本.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="561"/>
      <source>&lt;p&gt;To remove a custom line: cancel this dialog, select the line and right-click to obtain a &amp;quot;delete&amp;quot; option.&lt;/p&gt;</source>
      <translation>&lt;p&gt;删除自定义路径线, 请取消此对话框, 
选择要删除的路径线并右键单击以获取 "删除" 选项。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="447"/>
      <source>Special Exits:</source>
      <translation>特殊出口：</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="499"/>
      <source>Has
custom line?</source>
      <translation>已有
自定义路径?</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="511"/>
      <source> Destination </source>
      <translation> 目的地 </translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="522"/>
      <source> Command</source>
      <translation> 命令</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="567"/>
      <source>Cancel</source>
      <translation>取消</translation>
    </message>
  </context>
  <context>
    <name>delete_profile_confirmation</name>
    <message>
      <location filename="../src/ui/delete_profile_confirmation.ui" line="14"/>
      <source>Confirm permanent profile deletion</source>
      <translation>确认永久删除配置文件</translation>
    </message>
    <message>
      <location filename="../src/ui/delete_profile_confirmation.ui" line="26"/>
      <source>Are you sure that you&apos;d like to delete this profile? Everything (aliases, triggers, backups, etc) will be gone.

If you are, please type in the profile name as a confirmation:</source>
      <translation>你确定要删除这个配置文件吗? 一切都会消失(别名，触发器、备份等等)。

如果是，请型中档案名称为一确认：</translation>
    </message>
    <message>
      <location filename="../src/ui/delete_profile_confirmation.ui" line="54"/>
      <source>Delete</source>
      <translation>删除</translation>
    </message>
    <message>
      <location filename="../src/ui/delete_profile_confirmation.ui" line="61"/>
      <source>Cancel</source>
      <translation>取消</translation>
    </message>
  </context>
  <context>
    <name>dialog</name>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="39"/>
      <source>Status</source>
      <translation>状态</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="44"/>
      <source>Symbol
(Set Font)</source>
      <translation>符号
(设置字体)</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="50"/>
      <source>Symbol
(All Fonts)</source>
      <translation>符号（所有字体）</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="56"/>
      <source>Codepoints</source>
      <translation>编码</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="61"/>
      <source>Usage
Count</source>
      <translation>使用次数</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="67"/>
      <source>Rooms</source>
      <translation>房间</translation>
    </message>
  </context>
  <context>
    <name>directions</name>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13853"/>
      <source>north</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>北</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13855"/>
      <source>n</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>n</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13857"/>
      <source>east</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>东</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13859"/>
      <source>e</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>e</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13861"/>
      <source>south</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>南</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13863"/>
      <source>s</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>s</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13865"/>
      <source>west</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>西</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13867"/>
      <source>w</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>w</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13869"/>
      <source>northeast</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>东北</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13871"/>
      <source>ne</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>ne</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13873"/>
      <source>southeast</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>东南</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13875"/>
      <source>se</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>se</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13877"/>
      <source>southwest</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>西南</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13879"/>
      <source>sw</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>sw</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13881"/>
      <source>northwest</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>西北</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13883"/>
      <source>nw</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>nw</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13885"/>
      <source>in</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>in</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13887"/>
      <source>i</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>i</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13889"/>
      <source>out</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>out</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13891"/>
      <source>o</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>o</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13893"/>
      <source>up</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>up</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13895"/>
      <source>u</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>u</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13897"/>
      <source>down</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>down</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13899"/>
      <source>d</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>d</translation>
    </message>
  </context>
  <context>
    <name>dlgAboutDialog</name>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="146"/>
      <source>&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Homepage&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;http://www.mudlet.org/&quot;&gt;www.mudlet.org&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Forums&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;http://forums.mudlet.org/&quot;&gt;forums.mudlet.org&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Documentation&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;http://wiki.mudlet.org/w/Main_Page&quot;&gt;wiki.mudlet.org/w/Main_Page&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#7289DA;&quot;&gt;&lt;b&gt;Discord&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;https://www.mudlet.org/chat&quot;&gt;discord.gg&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#40b040;&quot;&gt;&lt;b&gt;Source code&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;https://github.com/Mudlet/Mudlet&quot;&gt;github.com/Mudlet/Mudlet&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#40b040;&quot;&gt;&lt;b&gt;Features/bugs&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;https://github.com/Mudlet/Mudlet/issues&quot;&gt;github.com/Mudlet/Mudlet/issues&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="155"/>
      <source>Original author, original project lead, Mudlet core coding, retired.</source>
      <comment>about:Heiko</comment>
      <translation>原作者，原始项目牵头人，Mudlet核心编码已经退出。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="158"/>
      <source>GUI design and initial feature planning. He is responsible for the project homepage and the user manual. Maintainer of the Windows, macOS, Ubuntu and generic Linux installers. Maintains the Mudlet wiki, Lua API, and handles project management, public relations &amp;amp; user help. With the project from the very beginning and is an official spokesman of the project. Since the retirement of Heiko, he has become the head of the Mudlet project.</source>
      <comment>about:Vadi</comment>
      <translation>GUI 设计和初始功能规划。 他负责项目主页和用户手册。 Windows ， macOS， Ubuntu 和通用 Linux 安装程序的维护人员。 维护 Mudlet Wiki Lua API ，并处理项目管理，公共关系 &amp; 用户帮助。 从一开始就有这个项目，是项目的官方发言人。 自从 Heiko 退休后，他就成为了 Mudlet 项目的负责人。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="165"/>
      <source>After joining in 2013, he has been poking various bits of the C++ code and GUI with a pointy stick; subsequently trying to patch over some of the holes made/found. Most recently he has been working on I18n and L10n for Mudlet 4.0.0 so if you are playing Mudlet in a language other than American English you will be seeing the results of him getting fed up with the spelling differences between what was being used and the British English his brain wanted to see.</source>
      <comment>about:SlySven</comment>
      <translation>在2013年加入后，他一直用 C++ 代码和 GUI 进行升级优化，随后尝试对所发现/发现的一些漏洞进行修补。 最近，他一直在为 Mudlet 4.0.0 在 I18n 和 L10n 工作，所以如果你以美国英语以外的语言播放 Mudlet ，那么你将看到他在不同语言之间的拼写差异的成果。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="172"/>
      <source>Former maintainer of the early Windows and Apple OSX packages. He also administers our server and helps the project in many ways.</source>
      <comment>about:demonnic</comment>
      <translation>早期的 Windows 和 Apple OSX 软件包的维护人员。 他还管理我们的服务器并以多种方式帮助项目。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="176"/>
      <source>Contributed many improvements to Mudlet&apos;s db: interface, event system, and has been around the project for a very long while assisting users.</source>
      <comment>about:keneanung</comment>
      <translation>对 Mudlet&apos;s db 做出了许多改进：界面，事件系统，并且一直陪伴该项目很长时间，同时协助用户。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="180"/>
      <source>Does a ton of work in making Mudlet, the website and the wiki accessible to you regardless of the language you speak - and promoting our genre!</source>
      <comment>about:Leris</comment>
      <translation>做了大量的工作，使 Mudlet，网站和WiKi 无论你说什么语言，你都可以访问，并推广我们的流派！</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="184"/>
      <source>Contributions to the Travis integration, CMake and Visual C++ build, a lot of code quality and memory management improvements.</source>
      <comment>about:ahmedcharles</comment>
      <translation>对 Travis 集成， CMake 和 Visual C++ 构建的贡献，许多代码质量和内存管理改进。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="188"/>
      <source>Developed a shared module system that allows script packages to be shared among profiles, a UI for viewing Lua variables, improvements in the mapper and all around.</source>
      <comment>about:Chris7</comment>
      <translation>开发了一个共享模块系统，允许在概要文件之间共享脚本包，用于查看 Lua 变量的 UI ，以及映射器及其周围的改进。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="192"/>
      <source>Developed the first version of our Mac OSX installer. He is the former maintainer of the Mac version of Mudlet.</source>
      <comment>about:Ben Carlsen</comment>
      <translation>开发了我们的 Mac OSX 安装程序的第一个版本。 他是 Mudlet Mac 版本的前维护者。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="196"/>
      <source>Joined in December 2009 though he&apos;s been around much longer. Contributed to the Lua API and is the former maintainer of the Lua API.</source>
      <comment>about:Ben Smith</comment>
      <translation>2009 年 12 月加入，他加入的时间更长。 为 Lua API 提供了帮助，并且是 Lua API 的前维护人员。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="200"/>
      <source>Joined in December 2009. He has contributed to the Lua API, submitted small bugfix patches and has helped with release management of 1.0.5.</source>
      <comment>about:Blaine von Roeder</comment>
      <translation>2009年 12 月加入。 他向 Lua API 提供了帮助，提交了少量的 bugfix 补丁，并帮助发布了 1.0.5的发布管理。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="204"/>
      <source>Developed the original cmake build script and he has committed a number of patches.</source>
      <comment>about:Bruno Bigras</comment>
      <translation>开发了最初的 cmake 构建脚本，他已经提交了一些补丁。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="207"/>
      <source>Contributed to the Lua API.</source>
      <comment>about:Carter Dewey</comment>
      <translation>为 Lua API 做出了贡献。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="210"/>
      <source>Developed the Vyzor GUI Manager for Mudlet.</source>
      <comment>about:Oneymus</comment>
      <translation>为 Mudlet 开发 Vyzor GUI Manager 。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="213"/>
      <source>Worked wonders in rejuventating our Website in 2017 but who prefers a little anonymity - if you are a &lt;i&gt;SpamBot&lt;/i&gt; you will not get onto our Fora now. They have also made some useful C++ core code contributions and we look forward to future reviews on and work in that area.</source>
      <comment>about:TheFae</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="218"/>
      <source>Joining us 2017 they have given us some useful C++ and Lua contributions.</source>
      <comment>about:Dicene</comment>
      <translation>于2017 年加入我们，他们为我们提供了一些有用的 C++ 和 Lua 的贡献。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="221"/>
      <source>Contributed the Geyser layout manager for Mudlet in March 2010. It is written in Lua and aims at simplifying user GUI scripting.</source>
      <comment>about:James Younquist</comment>
      <translation>2010 年 3 月为 Mudlet 提供了 Geyser 布局经理。 它是用 Lua 编写的，旨在简化用户 GUI 脚本编制。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="225"/>
      <source>Helped develop and debug the Lua API.</source>
      <comment>about:John Dahlström</comment>
      <translation>帮助开发和调试 Lua API。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="228"/>
      <source>Contributed several improvements and new features for Geyser.</source>
      <comment>about:Beliaar</comment>
      <translation>为 Geyser 提供了一些改进和新功能。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="231"/>
      <source>The original author of our Windows installer.</source>
      <comment>about:Leigh Stillard</comment>
      <translation>Windows 安装程序的原始作者。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="234"/>
      <source>Worked on the manual, forum help and helps with GUI design and documentation.</source>
      <comment>about:Maksym Grinenko</comment>
      <translation>致力于说明手册、论坛帮助和 GUI 设计和文档帮助。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="237"/>
      <source>Developed a database Lua API that allows for far easier use of databases and one of the original OSX installers.</source>
      <comment>about:Stephen Hansen</comment>
      <translation>开发了一个数据库 Lua API，允许更容易使用数据库和原始 OSX 安装程序之一。</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="240"/>
      <source>Designed our beautiful logo, our splash screen, the about dialog, our website, several icons and badges. Visit his homepage at &lt;a href=&quot;http://thorwil.wordpress.com/&quot;&gt;thorwil.wordpress.com&lt;/a&gt;.</source>
      <comment>about:Thorsten Wilms</comment>
      <translation>为我们设计了美丽的标志，我们启动画面，关于对话，我们的网站，几个图标和徽章。 您可以访问他的主页 &lt;a href=&quot;http://thorwil.wordpress.com/&quot;&gt;thorwil.wordpress.com&lt;/a&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="249"/>
      <source>&lt;p&gt;Others too, have make their mark on different aspects of the Mudlet project and if they have not been mentioned here it is by no means intentional! For past contributors you may see them mentioned in the &lt;b&gt;&lt;a href=&quot;https://launchpad.net/~mudlet-makers/+members#active&quot;&gt;Mudlet Makers&lt;/a&gt;&lt;/b&gt; list (on our former bug-tracking site), or for on-going contributors they may well be included in the &lt;b&gt;&lt;a href=&quot;https://github.com/Mudlet/Mudlet/graphs/contributors&quot;&gt;Contributors&lt;/a&gt;&lt;/b&gt; list on GitHub.&lt;/p&gt;
&lt;br&gt;
&lt;p&gt;Many icons are taken from the &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;&lt;u&gt;KDE4 oxygen icon theme&lt;/u&gt;&lt;/b&gt;&lt;/span&gt; at &lt;a href=&quot;https://web.archive.org/web/20130921230632/http://www.oxygen-icons.org/&quot;&gt;www.oxygen-icons.org &lt;sup&gt;{wayback machine archive}&lt;/sup&gt;&lt;/a&gt; or &lt;a href=&quot;http://www.kde.org&quot;&gt;www.kde.org&lt;/a&gt;.  Most of the rest are from Thorsten Wilms, or from Stephen Lyons combining bits of Thorsten&apos;s work with the other sources.&lt;/p&gt;
&lt;p&gt;Special thanks to &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Brett Duzevich&lt;/b&gt;&lt;/span&gt; and &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Ronny Ho&lt;/b&gt;&lt;/span&gt;. They have contributed many good ideas and thus helped improve the scripting framework substantially.&lt;/p&gt;
&lt;p&gt;Thanks to &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Tomas Mecir&lt;/b&gt;&lt;/span&gt; (&lt;span style=&quot;color:#0000ff;&quot;&gt;kmuddy@kmuddy.com&lt;/span&gt;) who brought us all together and inspired us with his KMuddy project. Mudlet is using some of the telnet code he wrote for his KMuddy project (&lt;a href=&quot;https://cgit.kde.org/kmuddy.git/&quot;&gt;cgit.kde.org/kmuddy.git/&lt;/a&gt;).&lt;/p&gt;
&lt;p&gt;Special thanks to &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Nick Gammon&lt;/b&gt;&lt;/span&gt; (&lt;a href=&quot;http://www.gammon.com.au/mushclient/mushclient.htm&quot;&gt;www.gammon.com.au/mushclient/mushclient.htm&lt;/a&gt;) for giving us some valued pieces of advice.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="294"/>
      <source>&lt;p&gt;Mudlet was originally written by Heiko Köhn, KoehnHeiko@googlemail.com.&lt;/p&gt;
&lt;p&gt;Mudlet is released under the GPL license version 2, which is reproduced below:&lt;/p&gt;</source>
      <comment>For non-english language versions please append a translation of the following to explain why the GPL is NOT reproduced in the relevent language: &apos;but only the English form is considered the official version of the license, so the following is reproduced in that language:&apos; to replace &apos;which is reproduced below:&apos;...</comment>
      <translation>&lt;p&gt;Mudlet 最初由Heiko Köhn、KoenhnHeiko@googlemail.com编写。&lt;/p&gt;
&lt;p&gt;Mudlet 在 GPL 许可证版本2 下发布，下面是转载：&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="590"/>
      <source>&lt;p align=&quot;center&quot;&gt;&lt;b&gt;Mudlet&lt;/b&gt; is built upon the shoulders of other projects in the FOSS world; as well as using many GPL components we also make use of some third-party software with other licenses:&lt;/p&gt;</source>
      <translation>&lt;p align=&quot;center&quot;&gt;&lt;b&gt;Mudlet&lt;/b&gt; 是建立在自由开放源码软件世界其他项目的肩膀上的；以及使用许多 GPL 组件，我们还使用一些第三方软件和其他许可证：&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="832"/>
      <source>&lt;h2&gt;&lt;u&gt;Communi IRC Library&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2008-2020 The Communi Project&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Communi IRC Library&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2008-2020 The Communi Project&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="835"/>
      <source>&lt;p&gt;Parts of &lt;tt&gt;irctextformat.cpp&lt;/t&gt; code come from Konversation and are copyrighted to:&lt;br&gt;Copyright © 2002 Dario Abatianni &amp;lt;eisfuchs@tigress.com&amp;gt;&lt;br&gt;Copyright © 2004 Peter Simonsson &amp;lt;psn@linux.se&amp;gt;&lt;br&gt;Copyright © 2006-2008 Eike Hein &amp;lt;hein@kde.org&amp;gt;&lt;br&gt;Copyright © 2004-2009 Eli Mackenzie &amp;lt;argonel@gmail.com&amp;gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="841"/>
      <source>&lt;h2&gt;&lt;u&gt;lua - Lua 5.1&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 1994–2017 Lua.org, PUC-Rio.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;lua - Lua 5.1&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 1994–2017 Lua.org, PUC-Rio.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="844"/>
      <source>&lt;h2&gt;&lt;u&gt;lua_yajl - Lua 5.1 interface to yajl&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Author: Brian Maher &amp;lt;maherb at brimworks dot com&amp;gt;&lt;br&gt;Copyright © 2009 Brian Maher&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;lua_yajl - Lua 5.1 interface to yajl&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Author: Brian Maher &amp;lt;maherb at brimworks dot com&amp;gt;&lt;br&gt;Copyright © 2009 Brian Maher&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="849"/>
      <source>&lt;h2&gt;&lt;u&gt;LuaZip - Reading files inside zip files&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Author: Danilo Tuler&lt;br&gt;Copyright © 2003-2007 Kepler Project&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;LuaZip - 在zip 文件中读取文件&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;作者：Danilo Tuler&lt;br&gt;版权所有 © 2003-2007 Kepler项目&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="854"/>
      <source>&lt;h2&gt;&lt;u&gt;edbee - multi-feature editor widget&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2012-2014 by Reliable Bits Software by Blommers IT&lt;/h3&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="857"/>
      <source>The &lt;b&gt;edbee-lib&lt;/b&gt; widget itself incorporates other components with licences that must be noted as well, they are:</source>
      <translation>&lt;b&gt;edbee-lib&lt;/b&gt; 窗口小部件本身包含其他必须注意的许可证组件，它们是:</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="859"/>
      <source>&lt;h2&gt;&lt;u&gt;Onigmo (Oniguruma-mod) LICENSE&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2002-2009 K.Kosako &amp;lt;sndgk393 AT ybb DOT ne DOT jp&amp;gt;&lt;br&gt;Copyright © 2011-2014 K.Takata &amp;lt;kentkt AT csc DOT jp&amp;gt;&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="864"/>
      <source>&lt;h2&gt;&lt;u&gt;Oniguruma LICENSE&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2002-2009 K.Kosako &amp;lt;sndgk393 AT ybb DOT ne DOT jp&amp;gt;&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="868"/>
      <source>&lt;h2&gt;&lt;u&gt;Ruby BSDL&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 1993-2013 Yukihiro Matsumoto.&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Ruby BSDL&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 1993-2013 Yukihiro Matsumoto.&lt;br&gt;All rights reserved.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="872"/>
      <source>&lt;h2&gt;&lt;u&gt;Qt-Components, QsLog&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;(&lt;span style=&quot;color:red&quot;&gt;&lt;u&gt;https://bitbucket.org/razvapetru/qt-components [broken link]&lt;/u&gt;&lt;/span&gt;&lt;/h3&gt;&lt;small&gt;&lt;a href=&quot;https://web.archive.org/web/20131220072148/https://bitbucket.org/razvanpetru/qt-components&quot;&gt; {&amp;quot;Wayback Machine&amp;quot; archived version}&lt;/a&gt;&lt;/small&gt;)&lt;br&gt;Copyright © 2013, Razvan Petru&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Qt-Components, QsLog&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;(&lt;span style=&quot;color:red&quot;&gt;&lt;u&gt;https://bitbucket.org/razvapetru/qt-components [broken link]&lt;/u&gt;&lt;/span&gt;&lt;/h3&gt;&lt;small&gt;&lt;a href=&quot;https://web.archive.org/web/20131220072148/https://bitbucket.org/razvanpetru/qt-components&quot;&gt; {&amp;quot;Wayback Machine&amp;quot; archived version}&lt;/a&gt;&lt;/small&gt;)&lt;br&gt;Copyright © 2013, Razvan Petru&lt;br&gt;All rights reserved.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="879"/>
      <source>&lt;h2&gt;&lt;u&gt;dblsqd&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2017 Philipp Medien&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;dblsqd&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2017 Philipp Medien&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="882"/>
      <source>&lt;h2&gt;&lt;u&gt;Sparkle - macOS updater&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2006-2013 Andy Matuschak.&lt;br&gt;Copyright © 2009-2013 Elgato Systems GmbH.&lt;br&gt;Copyright © 2011-2014 Kornel Lesiński.&lt;br&gt;Copyright © 2015-2017 Mayur Pawashe.&lt;br&gt;Copyright © 2014 C.W. Betts.&lt;br&gt;Copyright © 2014 Petroules Corporation.&lt;br&gt;Copyright © 2014 Big Nerd Ranch.&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="892"/>
      <source>&lt;h4&gt;bspatch.c and bsdiff.c, from bsdiff 4.3 &lt;a href=&quot;http://www.daemonology.net/bsdiff/&quot;&gt;http://www.daemonology.net/bsdiff&lt;/a&gt;:&lt;/h4&gt;&lt;h3&gt;Copyright © 2003-2005 Colin Percival.&lt;/h3&gt;&lt;h4&gt;sais.c and sais.c, from sais-lite (2010/08/07) &lt;a href=&quot;https://sites.google.com/site/yuta256/sais&quot;&gt;https://sites.google.com/site/yuta256/sais&lt;/a&gt;:&lt;/h4&gt;&lt;h3&gt;Copyright © 2008-2010 Yuta Mori.&lt;/h3&gt;&lt;h4&gt;SUDSAVerifier.m:&lt;/h4&gt;&lt;h3&gt;Copyright © 2011 Mark Hamlin.&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="900"/>
      <source>&lt;h2&gt;&lt;u&gt;sparkle-glue&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2008 Remko Troncon&lt;br&gt;Copyright © 2017 Vadim Peretokin&lt;/h3&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="906"/>
      <source>&lt;h2&gt;&lt;u&gt;Discord - Rich Presence - RPC library&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2017 Discord, Inc.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Discord - Rich Presence - RPC library&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;版权所有 © 2017 Discord, Inc.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="909"/>
      <source>&lt;h2&gt;&lt;u&gt;QtKeyChain - Platform-independent Qt API for storing passwords securely&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2011-2019 Frank Osterfeld &amp;lt;frank.osterfeld@gmail.com&amp;gt;.&lt;/h3&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1057"/>
      <source>
                          These formidable folks will be fondly remembered forever&lt;br&gt;for their generous financial support on &lt;a href=&quot;https://www.patreon.com/mudlet&quot;&gt;Mudlet&apos;s patreon&lt;/a&gt;:
                          </source>
      <translation>
                          这些强大的人将永远被深情地记住&lt;br&gt;他们慷慨的资金支持 &lt;a href=&quot;https://www.patreon.com/mudlet&quot;&gt;Mudlet&apos; patreon&lt;/a&gt;:
                          </translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1068"/>
      <source>Technical information:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1069"/>
      <source>Version</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1070"/>
      <source>OS</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1071"/>
      <source>CPU</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>dlgColorTrigger</name>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="52"/>
      <source>More colors</source>
      <translation>更多颜色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="54"/>
      <source>Click to access all 256 ANSI colors.</source>
      <translation>点击访问所有 256 种 ANSI 颜色。</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="59"/>
      <source>&lt;p&gt;Click to make the color trigger ignore the text&apos;s background color - however chosing this for both this and the foreground is an error.&lt;/p&gt;</source>
      <translation>&lt;p&gt;单击可使颜色触发器忽略文本的背景色-但是，当它同时作用于背景色和前景色时将引发错误的。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="60"/>
      <source>&lt;p&gt;Click to make the color trigger ignore the text&apos;s foreground color - however chosing this for both this and the background is an error.&lt;/p&gt;</source>
      <translation>&lt;p&gt;单击可使颜色触发器忽略文本的前景色-但是，当它同时作用于前景色和背景色时将引发错误的。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="64"/>
      <source>Default</source>
      <translation>默认</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="66"/>
      <source>&lt;p&gt;Click to make the color trigger when the text&apos;s background color has not been modified from its normal value.&lt;/p&gt;</source>
      <translation>&lt;p&gt;当文本的背景色为异常值时，单击以触发颜色。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="67"/>
      <source>&lt;p&gt;Click to make the color trigger when the text&apos;s foreground color has not been modified from its normal value.&lt;/p&gt;</source>
      <translation>&lt;p&gt;当文本的前景色为异常值时，单击以触发颜色。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="71"/>
      <source>&lt;p&gt;Click a color to make the trigger fire only when the text&apos;s background color matches the color number indicated.&lt;/p&gt;</source>
      <translation>&lt;p&gt;单击选择一种颜色, 当文本触发触发器的背景颜色与指示的颜色编号相匹配时将会被触发。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="72"/>
      <source>&lt;p&gt;Click a color to make the trigger fire only when the text&apos;s foreground color matches the color number indicated.&lt;/p&gt;</source>
      <translation>&lt;p&gt;单击选择一种颜色, 当文本触发触发器的前景颜色与指示的颜色编号相匹配时将会被触发。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="77"/>
      <source>Black</source>
      <translation>黑色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="78"/>
      <source>Red</source>
      <translation>红色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="79"/>
      <source>Green</source>
      <translation>绿色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="80"/>
      <source>Yellow</source>
      <translation>黄色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="81"/>
      <source>Blue</source>
      <translation>蓝色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="82"/>
      <source>Magenta</source>
      <translation>品红色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="83"/>
      <source>Cyan</source>
      <translation>青色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="84"/>
      <source>White (Light gray)</source>
      <translation>白色 (浅灰色)</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="86"/>
      <source>Light black (Dark gray)</source>
      <translation>浅黑色 (暗灰色)</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="87"/>
      <source>Light red</source>
      <translation>浅红色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="88"/>
      <source>Light green</source>
      <translation>浅绿色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="89"/>
      <source>Light yellow</source>
      <translation>淡黄色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="90"/>
      <source>Light blue</source>
      <translation>浅蓝色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="91"/>
      <source>Light magenta</source>
      <translation>浅洋红色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="92"/>
      <source>Light cyan</source>
      <translation>浅青色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="93"/>
      <source>Light white</source>
      <translation>浅白色</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="218"/>
      <source>%1 [%2]</source>
      <comment>Color Trigger dialog button in basic 16-color set, the first value is the name of the color, the second is the ANSI color number - for most languages modification is not likely to be needed - this text is used in two places</comment>
      <translation>%1 [%2]</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="405"/>
      <source>All color options are showing.</source>
      <translation>显示所有颜色选项。</translation>
    </message>
  </context>
  <context>
    <name>dlgConnectionProfiles</name>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="110"/>
      <source>Connect</source>
      <translation>连接</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="267"/>
      <source>Game name: %1</source>
      <translation>游戏名称: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1239"/>
      <source>This profile is currently loaded - close it before changing the connection parameters.</source>
      <translation>本配置当前已加载——在修改连接参数前先关闭它。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2050"/>
      <source>The %1 character is not permitted. Use one of the following:</source>
      <translation>字符 %1 不允许使用， 可选用下列其中一项：</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2080"/>
      <source>You have to enter a number. Other characters are not permitted.</source>
      <translation>你必须输入一个数字。 不允许使用其他字符。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2066"/>
      <source>This profile name is already in use.</source>
      <translation>此配置文件名称已经使用。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="523"/>
      <source>Could not rename your profile data on the computer.</source>
      <translation>无法重命名计算机上的配置文件数据。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="122"/>
      <source>&lt;p&gt;&lt;center&gt;&lt;big&gt;&lt;b&gt;Welcome to Mudlet!&lt;/b&gt;&lt;/big&gt;&lt;/center&gt;&lt;/p&gt;&lt;p&gt;&lt;center&gt;&lt;b&gt;Click on one of the games on the list to play.&lt;/b&gt;&lt;/center&gt;&lt;/p&gt;&lt;p&gt;To play a game not in the list, click on %1 &lt;span style=&quot; color:#555753;&quot;&gt;New&lt;/span&gt;, fill in the &lt;i&gt;Profile Name&lt;/i&gt;, &lt;i&gt;Server address&lt;/i&gt;, and &lt;i&gt;Port&lt;/i&gt; fields in the &lt;i&gt;Required &lt;/i&gt; area.&lt;/p&gt;&lt;p&gt;After that, click %2 &lt;span style=&quot; color:#555753;&quot;&gt;Connect&lt;/span&gt; to play.&lt;/p&gt;&lt;p&gt;Have fun!&lt;/p&gt;&lt;p align=&quot;right&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans&apos;;&quot;&gt;The Mudlet Team &lt;/span&gt;&lt;img src=&quot;:/icons/mudlet_main_16px.png&quot;/&gt;&lt;/p&gt;</source>
      <comment>Welcome message. Both %1 and %2 may be replaced by icons when this text is used.</comment>
      <translation>&lt;p&gt;&lt;center&gt;&lt;big&gt;&lt;b&gt;欢迎使用 Mudlet!&lt;/b&gt;&lt;/big&gt;&lt;/center&gt;&lt;/p&gt;&lt;p&gt;&lt;center&gt;&lt;b&gt;选中列表中的一个游戏开始你的游戏之旅。&lt;/b&gt;&lt;/center&gt;&lt;/p&gt;&lt;p&gt;如果你想玩的游戏不在列表名单中，点击 %1 &lt;span style=&quot; color:#555753;&quot;&gt;新建&lt;/span&gt;，补充完善 &lt;i&gt;档案名称&lt;/i&gt;, &lt;i&gt;服务器的地址&lt;/i&gt;，和 &lt;i&gt;端口号&lt;/i&gt; 完善 &lt;i&gt;所在的 &lt;/i&gt; 区域。&lt;/p&gt;&lt;p&gt;最后，点击 %2 &lt;span style=&quot; color:#555753;&quot;&gt;连接&lt;/span&gt; 到服务器。&lt;/p&gt;&lt;p&gt;开始你的mud之旅！&lt;/p&gt;&lt;p align=&quot;right&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans&apos;;&quot;&gt;Mudlet团队 &lt;/span&gt;&lt;img src=&quot;:/icons/mudlet_main_16px.png&quot;/&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="112"/>
      <source>Offline</source>
      <translation>离线</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="135"/>
      <source>Copy</source>
      <translation>复制</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="137"/>
      <source>Copy settings only</source>
      <translation>仅复制设置</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="145"/>
      <source>copy profile</source>
      <translation>复制配置文件</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="146"/>
      <source>copy the entire profile to new one that will require a different new name.</source>
      <translation>将整个配置文件复制到新的配置文件中，并重命名新配置文件。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="150"/>
      <source>copy profile settings</source>
      <translation>复制配置文件设置</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="151"/>
      <source>copy the settings and some other parts of the profile to a new one that will require a different new name.</source>
      <translation>将设置和配置文件的某些其他部分复制到新配置文件中。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="215"/>
      <source>Characters password, stored securely in the computer&apos;s credential manager</source>
      <translation>字符密码，安全地存储在计算机的凭据管理器</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="217"/>
      <source>Characters password. Note that the password isn&apos;t encrypted in storage</source>
      <translation>角色密码. 注意, 密码以明文存储存.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="264"/>
      <source>Click to load but not connect the selected profile.</source>
      <translation>点击加载但不连接选中的配置文件。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="265"/>
      <source>Click to load and connect the selected profile.</source>
      <translation>点击以加载并连接选定的配置文件。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="266"/>
      <source>Need to have a valid profile name, game server address and port before this button can be enabled.</source>
      <translation>在启用此按钮之前，需要具有有效的配置文件名称、游戏服务器地址和端口。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="268"/>
      <source>Button to select a mud game to play, double-click it to connect and start playing it.</source>
      <comment>Some text to speech engines will spell out initials like MUD so stick to lower case if that is a better option</comment>
      <translation>选择要玩的mud游戏，双击它来进行连接并开始游玩。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="531"/>
      <source>Could not create the new profile folder on your computer.</source>
      <translation>无法创建新的配置文件夹。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="567"/>
      <source>new profile name</source>
      <translation>新配置文件名称</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="680"/>
      <source>Deleting &apos;%1&apos;</source>
      <translation>删除 &apos;%1&apos;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1286"/>
      <source>Discord integration not available on this platform</source>
      <translation>Discord 集成在此平台上不可用</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1292"/>
      <source>Discord integration not supported by game</source>
      <translation>游戏不支持 Discord集成</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1295"/>
      <source>Check to enable Discord integration</source>
      <translation>勾选以启用整合的Discord</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1651"/>
      <source>Reset icon</source>
      <comment>Reset the custom picture for this profile in the connection dialog and show the default one instead</comment>
      <translation>重置图标</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1653"/>
      <source>Set custom icon</source>
      <comment>Set a custom picture to show for the profile in the connection dialog</comment>
      <translation>设置自定义图标</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1663"/>
      <source>Select custom image for profile (should be 120x30)</source>
      <translation>为配置文件选择自定义图像（应为 120x30）</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1665"/>
      <source>Images (%1)</source>
      <translation>图像 (%1)</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2093"/>
      <source>Port number must be above zero and below 65535.</source>
      <translation>端口号须大于0且不超过65535。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2119"/>
      <source>Mudlet can not load support for secure connections.</source>
      <translation>Mudlet 无法加载安全连接支持。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2143"/>
      <source>Please enter the URL or IP address of the Game server.</source>
      <translation>请输入游戏服务器的URL或IP地址。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2156"/>
      <source>SSL connections require the URL of the Game server.</source>
      <translation>SSL连接需要游戏服务器的URL。</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2174"/>
      <source>&lt;p&gt;Load profile without connecting.&lt;/p&gt;</source>
      <translation>&lt;p&gt;无需连接即可加载配置文件。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2190"/>
      <source>&lt;p&gt;Please set a valid profile name, game server address and the game port before loading.&lt;/p&gt;</source>
      <translation>&lt;p&gt;请在加载前设置有效的配置文件名称、游戏服务器地址和游戏端口。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2195"/>
      <source>&lt;p&gt;Please set a valid profile name, game server address and the game port before connecting.&lt;/p&gt;</source>
      <translation>&lt;p&gt;请在加载前设置有效的配置文件名称、游戏服务器地址和游戏端口。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2248"/>
      <source>&lt;p&gt;Click to hide the password; it will also hide if another profile is selected.&lt;/p&gt;</source>
      <translation>&lt;p&gt;单击以隐藏密码; 如果选择了另一个概要文件，那么它也将隐藏。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2252"/>
      <source>&lt;p&gt;Click to reveal the password for this profile.&lt;/p&gt;</source>
      <translation>&lt;p&gt;单击以显示此概要文件的密码。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2101"/>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2107"/>
      <source>Mudlet is not configured for secure connections.</source>
      <translation>Mudlet 没有配置安全连接.</translation>
    </message>
  </context>
  <context>
    <name>dlgIRC</name>
    <message>
      <location filename="../src/dlgIRC.cpp" line="119"/>
      <source>%1 closed their client.</source>
      <translation>%1 关闭了客户端。</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="131"/>
      <source>Mudlet IRC Client - %1 - %2 on %3</source>
      <translation>Mudlet IRC 客户端 - %1 %2 在 %3 上</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="145"/>
      <source>$ Starting Mudlet IRC Client...</source>
      <translation>$ 正在启动 Mudlet IRC 客户端...</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="146"/>
      <source>$ Host: %1:%2</source>
      <translation>$ 主机: %1:%2</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="147"/>
      <source>$ Nick: %1</source>
      <translation>$ 昵称: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="148"/>
      <source>$ Auto-Join Channels: %1</source>
      <translation>$ 自动加入频道：%1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="149"/>
      <source>$ This client supports Auto-Completion using the Tab key.</source>
      <translation>$ 客户端支持使用 Tab 键自动完成。</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="150"/>
      <source>$ Type &lt;b&gt;/help&lt;/b&gt; for commands or &lt;b&gt;/help [command]&lt;/b&gt; for command syntax.</source>
      <translation>$指令 &lt;b&gt;/help&lt;/b&gt;  或 &lt;b&gt;/help [command]&lt;/b&gt; 命令的语法。</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="209"/>
      <source>Restarting IRC Client</source>
      <translation>重启 IRC 客户端</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="382"/>
      <source>[Error] MSGLIMIT requires &lt;limit&gt; to be a whole number greater than zero!</source>
      <translation>[ 错误 ] MSGLIMIT要求 &lt;limit&gt; 为大于零的整数!</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="412"/>
      <source>[HELP] Available Commands: %1</source>
      <translation>[ 帮助 ] 可用命令: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="414"/>
      <source>[HELP] Syntax: %1</source>
      <translation>[ 帮助 ] 语法: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="422"/>
      <source>! Connected to %1.</source>
      <translation>! 已连接到 %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="423"/>
      <source>! Joining %1...</source>
      <translation>! 加入 %1...</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="428"/>
      <source>! Connecting %1...</source>
      <translation>! 正在连接到 %1...</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="433"/>
      <source>! Disconnected from %1.</source>
      <translation>! 已从 %1 断开连接.</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="499"/>
      <source>[ERROR] Syntax: %1</source>
      <translation>[ 错误 ] 语法: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="501"/>
      <source>[ERROR] Unknown command: %1</source>
      <translation>[ 错误 ] 无效命令: %s</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="647"/>
      <source>! The Nickname %1 is reserved. Automatically changing Nickname to: %2</source>
      <translation>! 昵称 %1 是已被占用。 自动将昵称更改为: %2</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="658"/>
      <source>Your nick has changed.</source>
      <translation>你的昵称已经改变。</translation>
    </message>
  </context>
  <context>
    <name>dlgMapper</name>
    <message>
      <location filename="../src/dlgMapper.cpp" line="347"/>
      <source>None</source>
      <comment>Don&apos;t show the map overlay, &apos;none&apos; meaning no map overlay styled are enabled</comment>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>dlgModuleManager</name>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="48"/>
      <source>Module Manager - %1</source>
      <translation>模块管理器 - %1</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="66"/>
      <source>Module Name</source>
      <translation>模块名称</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="66"/>
      <source>Priority</source>
      <translation>优先级</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="66"/>
      <source>Sync</source>
      <translation>同步</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="66"/>
      <source>Module Location</source>
      <translation>模块位置</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="105"/>
      <source>Checking this box will cause the module to be saved and &lt;i&gt;resynchronised&lt;/i&gt; across all sessions that share it when the &lt;i&gt;Save Profile&lt;/i&gt; button is clicked in the Editor or if it is saved at the end of the session.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="111"/>
      <source>&lt;b&gt;Note:&lt;/b&gt; &lt;i&gt;.zip&lt;/i&gt; and &lt;i&gt;.mpackage&lt;/i&gt; modules are currently unable to be synced&lt;br&gt; only &lt;i&gt;.xml&lt;/i&gt; packages are able to be synchronized across profiles at the moment. </source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="149"/>
      <source>Load Mudlet Module</source>
      <translation>加载 Mudlet 模块</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="156"/>
      <source>Load Mudlet Module:</source>
      <translation>加载 Mudlet 模块:</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="156"/>
      <source>Cannot read file %1:
%2.</source>
      <translation>无法读取文件 %1：
%2。</translation>
    </message>
  </context>
  <context>
    <name>dlgPackageExporter</name>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="14"/>
      <source>Package Exporter</source>
      <translation>包导出器</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="21"/>
      <source>Check items to export</source>
      <translation>检查要导出的项</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="57"/>
      <source>Triggers</source>
      <translation>触发器</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="58"/>
      <source>Aliases</source>
      <translation>别名</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="59"/>
      <source>Timers</source>
      <translation>定时器</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="60"/>
      <source>Scripts</source>
      <translation>脚本</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="61"/>
      <source>Keys</source>
      <translation>按键</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="62"/>
      <source>Buttons</source>
      <translation>按钮</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="78"/>
      <source>Export</source>
      <comment>Text for button to perform the package export on the items the user has selected.</comment>
      <translation>导出</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="88"/>
      <source>What do you wish to call the package:</source>
      <translation>您想将包命名为:</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="155"/>
      <source>Failed to open file &quot;%1&quot; to place into package. Error message was: &quot;%2&quot;.</source>
      <comment>This error message will appear when a file is to be placed into the package but the code cannot open it.</comment>
      <translation>无法打开要放入包的文件 &quot;%1&quot; . 错误消息为: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="163"/>
      <source>Failed to add file &quot;%1&quot; to package &quot;%2&quot;. Error message was: &quot;%3&quot;.</source>
      <comment>This error message will appear when a file is to be placed into the package but cannot be done for some reason.</comment>
      <translation>无法添加文件至包的文件中 &quot;%1&quot; . 错误消息为: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="182"/>
      <source>Failed to export. Could not open the folder &quot;%1&quot; for writing in. - Do you have the necessary permissions and free disk-space to write to that folder?</source>
      <translation>导出失败。无法写入文件夹 &quot;%1&quot;. - 您是否拥有写入/存储的权限并有足够的磁盘空间来写入到该文件夹？</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="262"/>
      <source>Failed to export. Could not write Mudlet items to the file &quot;%1&quot;.</source>
      <comment>This error message is shown when all the Mudlet items cannot be written to the &apos;packageName&apos;.xml file in the base directory of the place where all the files are staged before being compressed into the package file. The full path and filename are shown in %1 to help the user diagnose what might have happened.</comment>
      <translation>导出失败。无法写入 Mudlet 项目到文件 &quot;%1&quot;。</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="345"/>
      <source>Failed to open package file. Error is: &quot;%1&quot;.</source>
      <comment>This error message is shown when the libzip library code is unable to open the file that was to be the end result of the export process. As this may be an existing file anywhere in the computer&apos;s file-system(s) it is possible that permissions on the directory or an existing file that is to be overwritten may be a source of problems here.</comment>
      <translation>打开包文件失败。错误是: &quot;%1&quot;。</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="439"/>
      <source>Failed to add directory &quot;%1&quot; to package. Error is: &quot;%2&quot;.</source>
      <translation>未能将目录 &quot;%1&quot; 添加到包文件中。 错误为: &quot;%2&quot;。</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="495"/>
      <source>Required file &quot;%1&quot; was not found in the staging area. This area contains the Mudlet items chosen for the package, which you selected to be included in the package file. This suggests there may be a problem with that directory: &quot;%2&quot; - Do you have the necessary permissions and free disk-space?</source>
      <translation>在暂存区域中找不到所需文件 &quot;%1&quot; 此区域包含你选择要包含在包文件中的 Mudlet项目。 这表明该目录可能有问题： &quot;%2&quot; - 您是否拥有必要的权限和足够的磁盘空间？</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="517"/>
      <source>Failed to write files into and then close the package. Error is: &quot;%1&quot;.</source>
      <comment>This error message is displayed at the final stage of exporting a package when all the sourced files are finally put into the archive. Unfortunately this may be the point at which something breaks because a problem was not spotted/detected in the process earlier...</comment>
      <translation>无法写入文件并打包。 错误是： &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="537"/>
      <source>Package &quot;%1&quot; exported to: %2</source>
      <translation>包 &quot;%1&quot; 导出到: %2</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="833"/>
      <source>Why not &lt;a href=&quot;https://forums.mudlet.org/viewforum.php?f=6&quot;&gt;upload&lt;/a&gt; your package for other Mudlet users?</source>
      <comment>Only the text outside of the &apos;a&apos; (HTML anchor) tags PLUS the verb &apos;upload&apos; in between them in the source text, (associated with uploading the resulting package to the Mudlet forums) should be translated.</comment>
      <translation>为什么不 &lt;a href=&quot;https://forums.mudlet.org/viewforum.php?f=6&quot;&gt;上传&lt;/a&gt; 你的软件包给其他 Mudlet 用户？</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="32"/>
      <source>Do you want to add additional files to the package e. g. images, sounds etc. ? The add files button will bring up the file explorer. Copy all files and folders that you want to add to the package in the temporary package directory that is shown in the file explorer. When you are done click on the export button below to start package creation.</source>
      <translation>是否要向导出包中添加其他文件，例如图像、声音等？点击“添加文件”按钮将显示“文件资源管理器”。将想要添加进导出包中的所有文件和文件夹复制到文件资源管理器中显示的临时包路径里。完成后，单击下面的导出按钮开始创建导出包。</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="45"/>
      <source>Add Files</source>
      <translation>添加文件</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="52"/>
      <source>Export location:</source>
      <translation>导出路径</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="88"/>
      <source>Package name</source>
      <translation>包名</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="99"/>
      <source>Where do you want to save the package?</source>
      <translation>你想将压缩包导出到哪个位置？</translation>
    </message>
  </context>
  <context>
    <name>dlgPackageManager</name>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="42"/>
      <source>Package Manager - %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="54"/>
      <source>Import Mudlet Package</source>
      <translation>导入Mudlet包</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="61"/>
      <source>Import Mudlet Package:</source>
      <translation>导入Mudlet包:</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="61"/>
      <source>Cannot read file %1:
%2.</source>
      <translation>无法读取文件 %1：
%2。</translation>
    </message>
  </context>
  <context>
    <name>dlgProfilePreferences</name>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="142"/>
      <source>&lt;p&gt;Location which will be used to store log files - matching logs will be appended to.&lt;/p&gt;</source>
      <translation>&lt;p&gt;用来储存日志文件的位置——一致的日志会添加上。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="150"/>
      <source>logfile</source>
      <comment>Must be a valid default filename for a log-file and is used if the user does not enter any other value (Ensure all instances have the same translation {1 of 2}).</comment>
      <translation>日志文件</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="196"/>
      <source>&lt;p&gt;This will bring up a display showing all the symbols used in the current map and whether they can be drawn using just the specifed font, any other font, or not at all.  It also shows the sequence of Unicode &lt;i&gt;code-points&lt;/i&gt; that make up that symbol, so that they can be identified even if they cannot be displayed; also, up to the first thirty two rooms that are using that symbol are listed, which may help to identify any unexpected or odd cases.&lt;p&gt;</source>
      <translation>&lt;p&gt;这将会显示用于当前地图的所有标志，以及是否用了指定的字体、其它字体，或以上都不是来描绘。它也会显示构成标志的Unicode&lt;i&gt;码位&lt;/i&gt;的顺序，这样即使它们没有显示，也可以辨认它们了；而且，最开始的32个房间也会用标志列出来，这有助于辨认出任何意外的或古怪的地方。&lt;p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="202"/>
      <source>&lt;p&gt;Select the only or the primary font used (depending on &lt;i&gt;Only use symbols (glyphs) from chosen font&lt;/i&gt; setting) to produce the 2D mapper room symbols.&lt;/p&gt;</source>
      <translation>&lt;p&gt;选择要使用的唯一或首要的字体（取决于&lt;i&gt;选择字体&lt;/i&gt;设置中的&lt;i&gt;只使用标志(字形)）来生成2D房间标志。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="236"/>
      <source>&lt;p&gt;Some Desktop Environments tell Qt applications like Mudlet whether they should shown icons on menus, others, however do not. This control allows the user to override the setting, if needed, as follows:&lt;ul&gt;&lt;li&gt;&lt;b&gt;Unchecked&lt;/b&gt; &apos;&lt;i&gt;off&lt;/i&gt;&apos; = Prevent menus from being drawn with icons.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Checked&lt;/b&gt; &apos;&lt;i&gt;on&lt;/i&gt;&apos; = Allow menus to be drawn with icons.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Partly checked&lt;/b&gt; &lt;i&gt;(Default) &apos;auto&apos;&lt;/i&gt; = Use the setting that the system provides.&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;This setting is only processed when individual menus are created and changes may not propogate everywhere until Mudlet is restarted.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;有些桌面环境会告诉象是Mudlet这样的Qt应用，它们是否要在菜单或其它地方显示图标，然而却没有这样做。此项将允许用户在需要时无视设定，象下面这样：&lt;ul&gt;&lt;li&gt;&lt;b&gt;不勾选&lt;/b&gt;‘&apos;&lt;i&gt;关闭&lt;/i&gt;&apos;=阻止图标在菜单上出现。&lt;/li&gt;&lt;li&gt;&lt;b&gt;勾选&lt;/b&gt;’&apos;&lt;i&gt;开启&lt;/i&gt;&apos;=允许图标在菜单上出现。&lt;/li&gt;&lt;li&gt;&lt;b&gt;部分勾选&lt;/b&gt;&lt;i&gt;（默认）&apos;自动&apos;&lt;/i&gt;=使用系统提供的设定。&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;本设定只在直到Mudlet重启前个别创建和修改的菜单不会扩大到所有地方时才会进行。&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="293"/>
      <source>%1 (%2% done)</source>
      <comment>%1 is the (not-translated so users of the language can read it!) language name, %2 is percentage done.</comment>
      <translation>%1(%2已完成)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="346"/>
      <source>Migrated all passwords to secure storage.</source>
      <translation>正在将密码迁移到安全存储器.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="353"/>
      <source>Migrated %1...</source>
      <comment>This notifies the user that progress is being made on profile migration by saying what profile was just migrated to store passwords securely</comment>
      <translation>已迁移 %1...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="357"/>
      <source>Migrated all passwords to profile storage.</source>
      <translation>将所有密码迁移到配置文件存储。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="738"/>
      <source>yyyy-MM-dd#HH-mm-ss (e.g., 1970-01-01#00-00-00%1)</source>
      <translation>yyyy-mm-dd hh-mm-ss（例如，1970-01-01 00-00-00）</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="740"/>
      <source>yyyy-MM-ddTHH-mm-ss (e.g., 1970-01-01T00-00-00%1)</source>
      <translation>yyyy-MM-ddTHH-mm-ss (例如， 1970-01-01T00-00-00%1)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="741"/>
      <source>yyyy-MM-dd (concatenate daily logs in, e.g. 1970-01-01%1)</source>
      <translation>yyyy-MM-dd（连接每日登录，例如1970-01-01）</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="744"/>
      <source>yyyy-MM (concatenate month logs in, e.g. 1970-01%1)</source>
      <translation>yyyy-mm（连接月份登录，例如1970-01）</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="745"/>
      <source>Named file (concatenate logs in one file)</source>
      <translation>命名文件（连接日志到一个文件中）</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="778"/>
      <source>Other profiles to Map to:</source>
      <translation>要映射到的其他配置文件：</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="818"/>
      <source>%1 {Default, recommended}</source>
      <translation>%1 {默认的，建议}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="829"/>
      <source>%1 {Upgraded, experimental/testing, NOT recommended}</source>
      <translation>%1{升级，实验性/测试用，不建议}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="831"/>
      <source>%1 {Downgraded, for sharing with older version users, NOT recommended}</source>
      <translation>%1{降级，用于在老版本用户间共享，不建议}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="840"/>
      <source>2D Map Room Symbol scaling factor:</source>
      <translation>2D地图房间标记缩放系数：</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="860"/>
      <source>Show &quot;%1&quot; in the map area selection</source>
      <translation>在地图区域选择中显示 &quot;%1&quot;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="898"/>
      <source>%1 (*Error, report to Mudlet Makers*)</source>
      <comment>The encoder code name is not in the mudlet class mEncodingNamesMap when it should be and the Mudlet Makers need to fix it!</comment>
      <translation>%1 (*错误, 向 Mudlet 开发者报告*)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="1012"/>
      <location filename="../src/dlgProfilePreferences.cpp" line="3769"/>
      <source>Profile preferences - %1</source>
      <translation>配置设定-%1</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="1288"/>
      <source>Profile preferences</source>
      <translation>配置设定</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2006"/>
      <source>Load Mudlet map</source>
      <translation>载入 Mudlet 地图</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2021"/>
      <source>Importing map - please wait...</source>
      <translation>导入地图 - 请稍等...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2025"/>
      <source>Imported map from %1.</source>
      <translation>从 %1 加载地图。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2027"/>
      <source>Could not import map from %1.</source>
      <translation>无法从 %1 加载地图。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2030"/>
      <source>Loading map - please wait...</source>
      <translation>正载入地图——请稍等……</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2035"/>
      <source>Loaded map from %1.</source>
      <translation>从 %1 加载地图。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2037"/>
      <source>Could not load map from %1.</source>
      <translation>无法从 %1 加载地图。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2054"/>
      <source>Save Mudlet map</source>
      <translation>保存 Mudlet 地图</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2054"/>
      <source>Mudlet map (*.dat)</source>
      <comment>Do not change the extension text (in braces) - it is needed programmatically!</comment>
      <translation>Mudlet 地图 (*.dat)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2064"/>
      <source>Saving map - please wait...</source>
      <translation>正在保存地图 - 请稍候...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2074"/>
      <source>Saved map to %1.</source>
      <translation>保存地图到 %1。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2076"/>
      <source>Could not save map to %1.</source>
      <translation>无法将地图保存到 %1。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2104"/>
      <source>Migrating passwords to secure storage...</source>
      <translation>正在将密码迁移到安全存储器...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2111"/>
      <source>Migrating passwords to profiles...</source>
      <translation>正在将密码迁移到概要文件...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2143"/>
      <source>[ ERROR ] - Unable to use or create directory to store map for other profile &quot;%1&quot;.
Please check that you have permissions/access to:
&quot;%2&quot;
and there is enough space. The copying operation has failed.</source>
      <translation>[ 错误 ] - 无法使用或创建目录来为其他配置文件 &quot;%1&quot; 存储地图.
请检查您的访问权限：
&quot;%2&quot;
，并确认空间足够。复制操作失败。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2150"/>
      <source>Creating a destination directory failed...</source>
      <translation>创建目标目录失败...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2234"/>
      <source>Backing up current map - please wait...</source>
      <translation>正在备份当前地图 - 请稍候...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2244"/>
      <source>Could not backup the map - saving it failed.</source>
      <translation>无法备份地图 - 保存失败。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2269"/>
      <source>Could not copy the map - failed to work out which map file we just saved the map as!</source>
      <translation>无法复制地图 - 无法确认刚刚保存的地图！</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2281"/>
      <source>Copying over map to %1 - please wait...</source>
      <translation>正在复制地图到 %1 - 请稍候...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2287"/>
      <source>Could not copy the map to %1 - unable to copy the new map file over.</source>
      <translation>无法复制地图到 %1 - 无法复制新的地图文件。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2291"/>
      <source>Map copied successfully to other profile %1.</source>
      <translation>地图已成功复制到其他配置文件 %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2303"/>
      <source>Map copied, now signalling other profiles to reload it.</source>
      <translation>地图已复制, 现在显示其他配置文件以重新加载它。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2339"/>
      <source>Where should Mudlet save log files?</source>
      <translation>Mudlet 日志文件应该保存到哪里？</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2724"/>
      <source>%1 selected - press to change</source>
      <translation>%1 已选择 - 按下以更改</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2727"/>
      <source>Press to pick destination(s)</source>
      <translation>按下来选择目标位置</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2968"/>
      <source>Could not update themes: %1</source>
      <translation>无法更新主题: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2971"/>
      <source>Updating themes from colorsublime.github.io...</source>
      <translation>从colorsublime.github.io更新主题……</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3088"/>
      <source>{missing, possibly recently deleted trigger item}</source>
      <translation>{缺少, 可能是最近删除的触发器}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3091"/>
      <source>{missing, possibly recently deleted alias item}</source>
      <translation>{缺少, 可能是最近删除的别名}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3094"/>
      <source>{missing, possibly recently deleted script item}</source>
      <translation>{缺少, 可能是最近删除的脚本}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3097"/>
      <source>{missing, possibly recently deleted timer item}</source>
      <translation>{缺少, 可能是最近删除的定时器}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3100"/>
      <source>{missing, possibly recently deleted key item}</source>
      <translation>{缺少, 可能是最近删除的按键}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3103"/>
      <source>{missing, possibly recently deleted button item}</source>
      <translation>{缺少, 可能是最近删除的按钮}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3901"/>
      <source>Set outer color of player room mark.</source>
      <translation>设置玩家房间标记的外部颜色。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3902"/>
      <source>Set inner color of player room mark.</source>
      <translation>设置玩家房间标记的内部颜色。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="204"/>
      <source>&lt;p&gt;Using a single font is likely to produce a more consistent style but may cause the &lt;i&gt;font replacement character&lt;/i&gt; &apos;&lt;b&gt;�&lt;/b&gt;&apos; to show if the font does not have a needed glyph (a font&apos;s individual character/symbol) to represent the grapheme (what is to be represented).  Clearing this checkbox will allow the best alternative glyph from another font to be used to draw that grapheme.&lt;/p&gt;</source>
      <translation>&lt;p&gt;使用单种字体好似会产生更一致的风格，但也可能会在字体不是所需的字形（字体的&apos;单字/标志）所展现的字素（要展现的）时产生&lt;i&gt;字体的替换字符&lt;/i&gt;&apos;&lt;b&gt;&lt;b&gt;�&lt;/b&gt;&apos;来进行显示。不勾选此项将会允许用其它的字体中最适宜的替代字形来描绘字素。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="143"/>
      <source>&lt;p&gt;Select a directory where logs will be saved.&lt;/p&gt;</source>
      <translation>&lt;p&gt;选择日志将保存的目录。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="144"/>
      <source>&lt;p&gt;Reset the directory so that logs are saved to the profile&apos;s &lt;i&gt;log&lt;/i&gt; directory.&lt;/p&gt;</source>
      <translation>&lt;p&gt;重置目录以便日志能保存到配置&apos;的&lt;i&gt;日志&lt;/i&gt;目录中。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="145"/>
      <source>&lt;p&gt;This option sets the format of the log name.&lt;/p&gt;&lt;p&gt;If &lt;i&gt;Named file&lt;/i&gt; is selected, you can set a custom file name. (Logs are appended if a log file of the same name already exists.)&lt;/p&gt;</source>
      <translation>&lt;p&gt;本选项设置日志名的格式。&lt;/p&gt;&lt;p&gt;如果&lt;i&gt;选择的文件已命名了&lt;/i&gt;，你可以设置自定义文件名。（如果有相同名字的日志文件已存在，则记录会附加上。）&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="148"/>
      <source>&lt;p&gt;Set a custom name for your log. (New logs are appended if a log file of the same name already exists).&lt;/p&gt;</source>
      <translation>&lt;p&gt;为您的日志设置一个名称。(如果已存在同一个名称的日志文件，新日志将被追加在旧文件的末端)。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="169"/>
      <source>&lt;p&gt;Automatic updates are disabled in development builds to prevent an update from overwriting your Mudlet.&lt;/p&gt;</source>
      <translation>&lt;p&gt;自动更新在开发版中被禁用，以防止自动更新覆盖你的Mudelet。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="190"/>
      <source>&lt;p&gt;A timer with a short interval will quickly fill up the &lt;i&gt;Central Debug Console&lt;/i&gt; windows with messages that it ran correctly on &lt;i&gt;each&lt;/i&gt; occasion it is called.  This (per profile) control adjusts a threshold that will hide those messages in just that window for those timers which run &lt;b&gt;correctly&lt;/b&gt; when the timer&apos;s interval is less than this setting.&lt;/p&gt;&lt;p&gt;&lt;u&gt;Any timer script that has errors will still have its error messages reported whatever the setting.&lt;/u&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;很短间隔的定时器会很快在&lt;i&gt;每个&lt;/i&gt;正确运行而调用它的场合用消息填满&lt;i&gt;中央调试控制台&lt;/i&gt;的窗口。这（每个配置）个选项可以调整当定时器&apos;的间隔小于此设定的临界值时隐藏定时器&lt;b&gt;正确&lt;/b&gt;运行时窗口中的消息。&lt;/p&gt;&lt;/p&gt;&lt;u&gt;但不管这项设定如何，因定时器脚本产生的错误仍然会报告它的错误消息。&lt;/u&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="209"/>
      <source>&lt;p&gt;If &lt;b&gt;not&lt;/b&gt; checked Mudlet will only react to the first matching keybinding (combination of key and modifiers) even if more than one of them is set to be active. This means that a temporary keybinding (not visible in the Editor) created by a script or package may be used in preference to a permanent one that is shown and is set to be active. If checked then all matching keybindings will be run.&lt;/p&gt;&lt;p&gt;&lt;i&gt;It is recommended to not enable this option if you need to maintain compatibility with scripts or packages for Mudlet versions prior to &lt;b&gt;3.9.0&lt;/b&gt;.&lt;/i&gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="217"/>
      <source>&lt;p&gt;Some East Asian MUDs may use glyphs (characters) that Unicode classifies as being of &lt;i&gt;Ambigous&lt;/i&gt; width when drawn in a font with a so-called &lt;i&gt;fixed&lt;/i&gt; pitch; in fact such text is &lt;i&gt;duo-spaced&lt;/i&gt; when not using a proportional font. These symbols can be drawn using either a half or the whole space of a full character. By default Mudlet tries to chose the right width automatically but you can override the setting for each profile.&lt;/p&gt;&lt;p&gt;This control has three settings:&lt;ul&gt;&lt;li&gt;&lt;b&gt;Unchecked&lt;/b&gt; &apos;&lt;i&gt;narrow&lt;/i&gt;&apos; = Draw ambiguous width characters in a single &apos;space&apos;.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Checked&lt;/b&gt; &apos;&lt;i&gt;wide&lt;/i&gt;&apos; = Draw ambiguous width characters two &apos;spaces&apos; wide.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Partly checked&lt;/b&gt; &lt;i&gt;(Default) &apos;auto&apos;&lt;/i&gt; = Use &apos;wide&apos; setting for MUD Server encodings of &lt;b&gt;Big5&lt;/b&gt;, &lt;b&gt;GBK&lt;/b&gt; or &lt;b&gt;GBK18030&lt;/b&gt; and &apos;narrow&apos; for all others.&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;This is a temporary arrangement and will probably change when Mudlet gains full support for languages other than English.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;有些东亚的MUD可能会使用字形（字符），使得Unicode类别在描绘被称为&lt;i&gt;等宽&lt;/i&gt;字体时，会认作&lt;i&gt;模糊&lt;/i&gt;的宽度；事实上这样的文本在不使用比例字体时是&lt;i&gt;&lt;/i&gt;双字符宽&lt;/i&gt;的。这些符号可以使用全字符的半个或整个空间来描绘。默认时Mudlet会自动选择正确的宽度，但你可以为每个配置重设此设定。&lt;/p&gt;&lt;p&gt;这控制着三个选项：&lt;ul&gt;&lt;li&gt;&lt;b&gt;不勾选&lt;/b&gt;&apos;&lt;i&gt;紧凑&lt;/i&gt;&apos;=将模糊宽度的字符描绘进单个&apos;空间&apos;。&lt;/li&gt;&lt;li&gt;&lt;b&gt;勾选&lt;/b&gt;&apos;&lt;i&gt;宽广&lt;/i&gt;&apos;=描绘模糊宽度的字符为两&apos;倍&apos;宽。&lt;/li&gt;&lt;li&gt;&lt;b&gt;部分勾选&lt;/b&gt;&lt;i&gt;（默认）&apos;自动&apos;&lt;/i&gt;=使用&apos;MUD服务器的&lt;b&gt;Big5&lt;/b&gt;、&lt;b&gt;GBK&lt;/b&gt;、&lt;b&gt;GBK18030&lt;/b&gt;的设定&apos;宽度&apos;，剩下的则使用&apos;紧凑型&apos;。&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;这是个临时的安排，当Mudlet在这些语言中获得的支持超过了英文时会进行正确地修改的。&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="229"/>
      <source>&lt;p&gt;Enable a context (right click) menu action on any console/user window that, when the mouse cursor is hovered over it, will display the UTF-16 and UTF-8 items that make up each Unicode codepoint on the &lt;b&gt;first&lt;/b&gt; line of any selection.&lt;/p&gt;&lt;p&gt;This utility feature is intended to help the user identify any grapheme (visual equivalent to a &lt;i&gt;character&lt;/i&gt;) that a Game server may send even if it is composed of multiple bytes as any non-ASCII character will be in the Lua sub-system which uses the UTF-8 encoding system.&lt;p&gt;</source>
      <translation>&lt;p&gt;在任何的控制台/用户窗口中启用上下文（右键）菜单的动作。当鼠标指针在它上面盘旋时，会在任何被选中的&lt;b&gt;第一&lt;/b&gt;行处显示由UTF-16 和UTF-8项所构成的各自的Unicode码位。&lt;/p&gt;&lt;p&gt;此项功能可以用来帮助用户识别游戏服务器送出的任意的字素（&lt;i&gt;字符&lt;/i&gt;的可视等效物），哪怕它是在使用了 UTF-8编码系统的Lua分系统中由多字节所组成的任意非ASCII字符。&lt;p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="571"/>
      <source>Mudlet dictionaries:</source>
      <comment>On Windows and MacOs, we have to bundle our own dictionaries with our application - and we also use them on *nix systems where we do not find the system ones.</comment>
      <translation>Mudlet词典：</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="573"/>
      <source>System dictionaries:</source>
      <comment>On *nix systems where we find the system ones we use them.</comment>
      <translation>系统字典：</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="604"/>
      <source>&lt;p&gt;From the dictionary file &lt;tt&gt;%1.dic&lt;/tt&gt; (and its companion affix &lt;tt&gt;.aff&lt;/tt&gt; file).&lt;/p&gt;</source>
      <translation>&lt;p&gt;来自字典文件 &lt;tt&gt;%1.dic&lt;/tt&gt; (及其相关的文件 &lt;tt&gt;.aff&lt;/tt&gt; 文件)。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="606"/>
      <source>%1 - not recognised</source>
      <translation>%1 - 未识别</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="607"/>
      <source>&lt;p&gt;Mudlet does not recognise the code &quot;%1&quot;, please report it to the Mudlet developers so we can describe it properly in future Mudlet versions!&lt;/p&gt;&lt;p&gt;The file &lt;tt&gt;%2.dic&lt;/tt&gt; (and its companion affix &lt;tt&gt;.aff&lt;/tt&gt; file) is still usable.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Mudelet无法识别的代码 &quot;%1&quot;，请向Mudelet开发者报告，以便我们可以在今后的 Mudelet 版本中正确识别它！&lt;/p&gt;&lt;p&gt;文件 &lt;tt&gt;%2.dic&lt;/tt&gt; (及其伴侣 &lt;tt&gt;.faf&lt;/tt&gt; 文件) 仍然可用。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="632"/>
      <source>No Hunspell dictionary files found, spell-checking will not be available.</source>
      <translation>未找到拼写检查器的字典文件，拼写检查将不可用。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2008"/>
      <source>Mudlet map (*.dat);;Xml map data (*.xml);;Any file (*)</source>
      <comment>Do not change extensions (in braces) as they are used programmatically</comment>
      <translation>Mudlet 地图 (*.dat);;Xml 地图数据 (*.xml);;所有文件 (*)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3228"/>
      <source>&lt;p&gt;The room symbol will appear like this if only symbols (glyphs) from the specfic font are used.&lt;/p&gt;</source>
      <translation>&lt;p&gt;如果仅使用特定字体的符号(字形)，房间符号将会像这样显示。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3234"/>
      <source>&lt;p&gt;The room symbol will appear like this if symbols (glyphs) from any font can be used.&lt;/p&gt;</source>
      <translation>&lt;p&gt;如果仅使用特定字体的符号(字形)，房间符号将会像这样显示。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3263"/>
      <source>&lt;p&gt;These are the sequence of hexadecimal numbers that are used by the Unicode consortium to identify the graphemes needed to create the symbol.  These numbers can be utilised to determine precisely what is to be drawn even if some fonts have glyphs that are the same for different codepoints or combination of codepoints.&lt;/p&gt;&lt;p&gt;Character entry utilities such as &lt;i&gt;charmap.exe&lt;/i&gt; on &lt;i&gt;Windows&lt;/i&gt; or &lt;i&gt;gucharmap&lt;/i&gt; on many Unix type operating systems will also use these numbers which cover everything from U+0020 {Space} to U+10FFFD the last usable number in the &lt;i&gt;Private Use Plane 16&lt;/i&gt; via most of the written marks that humanity has ever made.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3276"/>
      <source>&lt;p&gt;How many rooms in the whole map have this symbol.</source>
      <translation>&lt;p&gt;整个地图中有多少房间具有此符号。</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3288"/>
      <source>more - not shown...</source>
      <translation>更多 - 未显示...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3295"/>
      <source>&lt;p&gt;The rooms with this symbol, up to a maximum of thirty-two, if there are more than this, it is indicated but they are not shown.&lt;/p&gt;</source>
      <translation>&lt;p&gt;具有此符号的房间，最多可达三十二个，如果有超过三十二个，它们依然会被提示，但不会显示出来。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3304"/>
      <source>&lt;p&gt;The symbol can be made entirely from glyphs in the specified font.&lt;/p&gt;</source>
      <translation>&lt;p&gt;符号可以完全从指定字体中的 glyphs 中生成。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3314"/>
      <source>&lt;p&gt;The symbol cannot be made entirely from glyphs in the specified font, but, using other fonts in the system, it can. Either un-check the &lt;i&gt;Only use symbols (glyphs) from chosen font&lt;/i&gt; option or try and choose another font that does have the needed glyphs.&lt;/p&gt;&lt;p&gt;&lt;i&gt;You need not close this table to try another font, changing it on the main preferences dialogue will update this table after a slight delay.&lt;/i&gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3324"/>
      <source>&lt;p&gt;The symbol cannot be drawn using any of the fonts in the system, either an invalid string was entered as the symbol for the indicated rooms or the map was created on a different systems with a different set of fonts available to use. You may be able to correct this by installing an additional font using whatever method is appropriate for this system or by editing the map to use a different symbol. It may be possible to do the latter via a lua script using the &lt;i&gt;getRoomChar&lt;/i&gt; and &lt;i&gt;setRoomChar&lt;/i&gt; functions.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3413"/>
      <source>Large icon</source>
      <comment>Discord Rich Presence large icon</comment>
      <translation>大图标</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3414"/>
      <source>Detail</source>
      <comment>Discord Rich Presence detail</comment>
      <translation>详细信息</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3416"/>
      <source>Small icon</source>
      <comment>Discord Rich Presence small icon</comment>
      <translation>小图标</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3417"/>
      <source>State</source>
      <comment>Discord Rich Presence state</comment>
      <translation>状态</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3419"/>
      <source>Party size</source>
      <comment>Discord Rich Presence party size</comment>
      <translation>队伍人数</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3420"/>
      <source>Party max</source>
      <comment>Discord Rich Presence maximum party size</comment>
      <translation>最大参与方</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3421"/>
      <source>Time</source>
      <comment>Discord Rich Presence time until or time elapsed</comment>
      <translation>时间</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3456"/>
      <source>Map symbol usage - %1</source>
      <translation>地图符号使用情况的 %1</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3533"/>
      <source>yyyy-MM-dd#HH-mm-ss (e.g., 1970-01-01#00-00-00.html)</source>
      <translation>yyyy-MM-dd#HH-mm-ss (例如, 1970-01-01#00-00-00.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3534"/>
      <source>yyyy-MM-ddTHH-mm-ss (e.g., 1970-01-01T00-00-00.html)</source>
      <translation>yyyy-MM-ddTHH-mm-ss (例如, 1970-01-01T00-00-00.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3535"/>
      <source>yyyy-MM-dd (concatenate daily logs in, e.g. 1970-01-01.html)</source>
      <translation>yyyy-MM-dd(连接日志, 例如 1970-01-01.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3536"/>
      <source>yyyy-MM (concatenate month logs in, e.g. 1970-01.html)</source>
      <translation>yyyy-MM (连接的月份记录，例如 1970-01.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3539"/>
      <source>yyyy-MM-dd#HH-mm-ss (e.g., 1970-01-01#00-00-00.txt)</source>
      <translation>yyyy-MM-dd#HH-mm-ss (例如, 1970-01-01#00-00-00.txt)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3540"/>
      <source>yyyy-MM-ddTHH-mm-ss (e.g., 1970-01-01T00-00-00.txt)</source>
      <translation>yyyy-MM-ddTHH-mm-ss (例如, 1970-01-01T00-00-00.txt)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3541"/>
      <source>yyyy-MM-dd (concatenate daily logs in, e.g. 1970-01-01.txt)</source>
      <translation>yyyy-MM-dd (连接日志, 例如 1970-01-01.txt)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3542"/>
      <source>yyyy-MM (concatenate month logs in, e.g. 1970-01.txt)</source>
      <translation>yyyy-MM (连接的月份记录，例如 1970-01.txt)</translation>
    </message>
  </context>
  <context>
    <name>dlgRoomExits</name>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="144"/>
      <location filename="../src/dlgRoomExits.cpp" line="149"/>
      <location filename="../src/dlgRoomExits.cpp" line="724"/>
      <location filename="../src/dlgRoomExits.cpp" line="729"/>
      <location filename="../src/dlgRoomExits.cpp" line="777"/>
      <location filename="../src/dlgRoomExits.cpp" line="782"/>
      <location filename="../src/dlgRoomExits.cpp" line="826"/>
      <location filename="../src/dlgRoomExits.cpp" line="831"/>
      <location filename="../src/dlgRoomExits.cpp" line="875"/>
      <location filename="../src/dlgRoomExits.cpp" line="880"/>
      <location filename="../src/dlgRoomExits.cpp" line="924"/>
      <location filename="../src/dlgRoomExits.cpp" line="929"/>
      <location filename="../src/dlgRoomExits.cpp" line="973"/>
      <location filename="../src/dlgRoomExits.cpp" line="978"/>
      <location filename="../src/dlgRoomExits.cpp" line="1022"/>
      <location filename="../src/dlgRoomExits.cpp" line="1027"/>
      <location filename="../src/dlgRoomExits.cpp" line="1071"/>
      <location filename="../src/dlgRoomExits.cpp" line="1076"/>
      <location filename="../src/dlgRoomExits.cpp" line="1120"/>
      <location filename="../src/dlgRoomExits.cpp" line="1125"/>
      <location filename="../src/dlgRoomExits.cpp" line="1169"/>
      <location filename="../src/dlgRoomExits.cpp" line="1174"/>
      <location filename="../src/dlgRoomExits.cpp" line="1218"/>
      <location filename="../src/dlgRoomExits.cpp" line="1223"/>
      <location filename="../src/dlgRoomExits.cpp" line="1267"/>
      <location filename="../src/dlgRoomExits.cpp" line="1272"/>
      <location filename="../src/dlgRoomExits.cpp" line="1741"/>
      <location filename="../src/dlgRoomExits.cpp" line="1746"/>
      <location filename="../src/dlgRoomExits.cpp" line="1849"/>
      <location filename="../src/dlgRoomExits.cpp" line="1854"/>
      <source>&lt;b&gt;Room&lt;/b&gt; Weight of destination: %1.</source>
      <comment>Bold HTML tags are used to emphasis that the value is destination room&apos;s weight whether overridden by a non-zero exit weight here or not.</comment>
      <translation>&lt;b&gt;房间&lt;/b&gt; 目的地权重： %1。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="148"/>
      <location filename="../src/dlgRoomExits.cpp" line="728"/>
      <location filename="../src/dlgRoomExits.cpp" line="781"/>
      <location filename="../src/dlgRoomExits.cpp" line="830"/>
      <location filename="../src/dlgRoomExits.cpp" line="879"/>
      <location filename="../src/dlgRoomExits.cpp" line="928"/>
      <location filename="../src/dlgRoomExits.cpp" line="977"/>
      <location filename="../src/dlgRoomExits.cpp" line="1026"/>
      <location filename="../src/dlgRoomExits.cpp" line="1075"/>
      <location filename="../src/dlgRoomExits.cpp" line="1124"/>
      <location filename="../src/dlgRoomExits.cpp" line="1173"/>
      <location filename="../src/dlgRoomExits.cpp" line="1222"/>
      <location filename="../src/dlgRoomExits.cpp" line="1271"/>
      <location filename="../src/dlgRoomExits.cpp" line="1745"/>
      <location filename="../src/dlgRoomExits.cpp" line="1853"/>
      <source>Exit to unnamed room is valid</source>
      <translation>有效的出口通往未命名的房间</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="155"/>
      <source>Entered number is invalid, set the number of the room that this special exit leads to, will turn blue for a valid number; if left like this, this exit will be deleted when &amp;lt;i&amp;gt;save&amp;lt;/i&amp;gt; is clicked.</source>
      <translation>输入的数字无效，设置出口将要指向的房间编号, 某该出效有效, 则会显示蓝色; 如果该输入的房间编号无效, 那么将在 &amp;lt;i&amp;gt;保存&amp;lt;/i&amp;gt时删除此出口。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="217"/>
      <source>Set the number of the room that this special exit leads to, will turn blue for a valid number; if left like this, this exit will be deleted when &amp;lt;i&amp;gt;save&amp;lt;/i&amp;gt; is clicked.</source>
      <translation>设置出口将要指向的房间编号, 某该出效有效, 则会显示蓝色; 如果该输入的房间编号无效, 那么将在 &amp;lt;i&amp;gt;保存&amp;lt;/i&amp;gt时删除此出口。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="220"/>
      <location filename="../src/dlgRoomExits.cpp" line="1872"/>
      <source>Prevent a route being created via this exit, equivalent to an infinite exit weight.</source>
      <translation>禁止通过此出口创建的路由，这会创建一个死循环出口权重。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="224"/>
      <location filename="../src/dlgRoomExits.cpp" line="1881"/>
      <source>Set to a positive value to override the default (Room) Weight for using this Exit route, zero value assigns the default.</source>
      <translation>此出口路径时, 需设置一个非负值以覆盖缺省 (房间) 权重，设为 0 时指定为缺省值。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="226"/>
      <location filename="../src/dlgRoomExits.cpp" line="1888"/>
      <source>No door symbol is drawn on 2D Map for this exit (only functional choice currently).</source>
      <translation>在2D 地图上没有为此出口绘制门符号（目前该选项仅供选择）。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="228"/>
      <location filename="../src/dlgRoomExits.cpp" line="1892"/>
      <source>Green (Open) door symbol would be drawn on a custom exit line for this exit on 2D Map (but not currently).</source>
      <translation>绿色 (打开) 门符号将在 2D Map 上的此出口的定制出口线上绘制 ( 但当前不存在) 。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="230"/>
      <location filename="../src/dlgRoomExits.cpp" line="1897"/>
      <source>Orange (Closed) door symbol would be drawn on a custom exit line for this exit on 2D Map (but not currently).</source>
      <translation>橙色 (关闭) 门符号将在 2D Map 上的此出口的定制出口线上绘制 ( 但当前不存在) 。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="232"/>
      <location filename="../src/dlgRoomExits.cpp" line="1900"/>
      <source>Red (Locked) door symbol would be drawn on a custom exit line for this exit on 2D Map (but not currently).</source>
      <translation>红色 (锁住) 门符号将在 2D Map 上的此出口的定制出口线上绘制 ( 但当前不存在) 。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="92"/>
      <location filename="../src/dlgRoomExits.cpp" line="215"/>
      <source>(room ID)</source>
      <comment>Placeholder, if no room ID is set for an exit, yet. This string is used in 2 places, ensure they match!</comment>
      <translation>(房间ID)</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="132"/>
      <location filename="../src/dlgRoomExits.cpp" line="233"/>
      <location filename="../src/dlgRoomExits.cpp" line="268"/>
      <location filename="../src/dlgRoomExits.cpp" line="2255"/>
      <location filename="../src/dlgRoomExits.cpp" line="2277"/>
      <source>(command or Lua script)</source>
      <comment>Placeholder, if a special exit has no code given, yet. This string is also used programmatically - ensure all five instances are the same</comment>
      <translation>(命令或Lua脚本)</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="143"/>
      <location filename="../src/dlgRoomExits.cpp" line="723"/>
      <location filename="../src/dlgRoomExits.cpp" line="776"/>
      <location filename="../src/dlgRoomExits.cpp" line="825"/>
      <location filename="../src/dlgRoomExits.cpp" line="874"/>
      <location filename="../src/dlgRoomExits.cpp" line="923"/>
      <location filename="../src/dlgRoomExits.cpp" line="972"/>
      <location filename="../src/dlgRoomExits.cpp" line="1021"/>
      <location filename="../src/dlgRoomExits.cpp" line="1070"/>
      <location filename="../src/dlgRoomExits.cpp" line="1119"/>
      <location filename="../src/dlgRoomExits.cpp" line="1168"/>
      <location filename="../src/dlgRoomExits.cpp" line="1217"/>
      <location filename="../src/dlgRoomExits.cpp" line="1266"/>
      <location filename="../src/dlgRoomExits.cpp" line="1740"/>
      <location filename="../src/dlgRoomExits.cpp" line="1848"/>
      <source>Exit to &quot;%1&quot;.</source>
      <translation>退出到 &quot;%1&quot;。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="737"/>
      <source>Entered number is invalid, set the number of the room northwest of this one, will turn blue for a valid number.</source>
      <translation>输入的数字无效的，设定 northwest 房间的ID，如果ID有效, 则会变成蓝色。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="748"/>
      <location filename="../src/dlgRoomExits.cpp" line="1320"/>
      <source>Set the number of the room northwest of this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 northwest 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="788"/>
      <source>Entered number is invalid, set the number of the room north of this one, will turn blue for a valid number.</source>
      <translation>输入的数字无效的，设定 north 房间的ID，如果ID有效, 则会变成蓝色。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="798"/>
      <location filename="../src/dlgRoomExits.cpp" line="1354"/>
      <source>Set the number of the room north of this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 north 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="837"/>
      <source>Entered number is invalid, set the number of the room northeast of this one, will turn blue for a valid number.</source>
      <translation>输入的数字无效的，设定 northeast 房间的ID，如果ID有效, 则会变成蓝色。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="847"/>
      <location filename="../src/dlgRoomExits.cpp" line="1385"/>
      <source>Set the number of the room northeast of this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 northeast 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="886"/>
      <source>Entered number is invalid, set the number of the room up from this one, will turn blue for a valid number.</source>
      <translation>输入的数字无效的，设定 up 房间的ID，如果ID有效, 则会变成蓝色。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="896"/>
      <location filename="../src/dlgRoomExits.cpp" line="1416"/>
      <source>Set the number of the room up from this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 up 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="935"/>
      <source>Entered number is invalid, set the number of the room west of this one, will turn blue for a valid number.</source>
      <translation>输入的数字无效的，设定 west 房间的ID，如果ID有效, 则会变成蓝色。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="945"/>
      <location filename="../src/dlgRoomExits.cpp" line="1447"/>
      <source>Set the number of the room west of this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 west 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="984"/>
      <source>Entered number is invalid, set the number of the room east of this one, will turn blue for a valid number.</source>
      <translation>输入的数字无效的，设定 east 房间的ID，如果ID有效, 则会变成蓝色。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="994"/>
      <location filename="../src/dlgRoomExits.cpp" line="1478"/>
      <source>Set the number of the room east of this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 east 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1033"/>
      <source>Entered number is invalid, set the number of the room down from this one, will turn blue for a valid number.</source>
      <translation>输入的数字无效的，设定 down 房间的ID，如果ID有效, 则会变成蓝色。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1043"/>
      <location filename="../src/dlgRoomExits.cpp" line="1509"/>
      <source>Set the number of the room down from this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 down 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1082"/>
      <source>Entered number is invalid, set the number of the room southwest of this one, will turn blue for a valid number.</source>
      <translation>输入的数字无效的，设定 southwest 房间的ID，如果ID有效, 则会变成蓝色。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1092"/>
      <location filename="../src/dlgRoomExits.cpp" line="1540"/>
      <source>Set the number of the room southwest of this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 southwest 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1131"/>
      <source>Entered number is invalid, set the number of the room south of this one, will turn blue for a valid number.</source>
      <translation>输入的数字无效的，设定 south 房间的ID，如果ID有效, 则会变成蓝色。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1141"/>
      <location filename="../src/dlgRoomExits.cpp" line="1571"/>
      <source>Set the number of the room south of this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 south 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1180"/>
      <source>Entered number is invalid, set the number of the room southeast of this one, will turn blue for a valid number.</source>
      <translation>输入的数字无效的，设定 southeast 房间的ID，如果ID有效, 则会变成蓝色。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1190"/>
      <location filename="../src/dlgRoomExits.cpp" line="1602"/>
      <source>Set the number of the room southeast of this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 southeast 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1229"/>
      <source>Entered number is invalid, set the number of the room in from this one, will turn blue for a valid number.</source>
      <translation>输入的数字无效的，设定 in 房间的ID，如果ID有效, 则会变成蓝色。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1239"/>
      <location filename="../src/dlgRoomExits.cpp" line="1633"/>
      <source>Set the number of the room in from this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 in 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1278"/>
      <source>Entered number is invalid, set the number of the room out from this one, will turn blue for a valid number.</source>
      <translation>输入的数字无效的，设定 out 房间的ID，如果ID有效, 则会变成蓝色。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1288"/>
      <location filename="../src/dlgRoomExits.cpp" line="1664"/>
      <source>Set the number of the room out from this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 out 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1312"/>
      <location filename="../src/dlgRoomExits.cpp" line="1346"/>
      <location filename="../src/dlgRoomExits.cpp" line="1377"/>
      <location filename="../src/dlgRoomExits.cpp" line="1408"/>
      <location filename="../src/dlgRoomExits.cpp" line="1439"/>
      <location filename="../src/dlgRoomExits.cpp" line="1470"/>
      <location filename="../src/dlgRoomExits.cpp" line="1501"/>
      <location filename="../src/dlgRoomExits.cpp" line="1532"/>
      <location filename="../src/dlgRoomExits.cpp" line="1563"/>
      <location filename="../src/dlgRoomExits.cpp" line="1594"/>
      <location filename="../src/dlgRoomExits.cpp" line="1625"/>
      <location filename="../src/dlgRoomExits.cpp" line="1656"/>
      <location filename="../src/dlgRoomExits.cpp" line="1769"/>
      <source>Clear the stub exit for this exit to enter an exit roomID.</source>
      <translation>已为当前出口清除异常未知的出口标记。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1691"/>
      <source>northwest</source>
      <translation>西北</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1692"/>
      <source>north</source>
      <translation>北</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1693"/>
      <source>northeast</source>
      <translation>东北</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1694"/>
      <source>up</source>
      <translation>上</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1695"/>
      <source>west</source>
      <translation>西</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1696"/>
      <source>east</source>
      <translation>东</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1697"/>
      <source>down</source>
      <translation>下</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1698"/>
      <source>southwest</source>
      <translation>西南</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1699"/>
      <source>south</source>
      <translation>南</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1700"/>
      <source>southeast</source>
      <translation>东南</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1701"/>
      <source>in</source>
      <translation>入口</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1702"/>
      <source>out</source>
      <translation>出口</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1777"/>
      <source>Set the number of the room %1 of this one, will be blue for a valid number or red for invalid.</source>
      <translation>设置房间 %1 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1800"/>
      <source>Exits for room: &quot;%1&quot; [*]</source>
      <translation>房间出口: &quot;%1&quot; [*]</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1802"/>
      <source>Exits for room Id: %1 [*]</source>
      <translation>房间 Id 的出口: %1 [*]</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1860"/>
      <source>Room Id is invalid, set the number of the room that this special exit leads to, will turn blue for a valid number.</source>
      <translation>房间ID无效，设置此特殊出口将要去往的房间ID，如果有效, 则会变为蓝色。</translation>
    </message>
  </context>
  <context>
    <name>dlgRoomSymbol</name>
    <message numerus="yes">
      <location filename="../src/dlgRoomSymbol.cpp" line="75"/>
      <source>The only used symbol is &quot;%1&quot; in one or
more of the selected %n room(s), delete this to
clear it from all selected rooms or replace
with a new symbol to use for all the rooms:</source>
      <comment>This is for when applying a new room symbol to one or more rooms and some have the SAME symbol (others may have none) at present, %n is the total number of rooms involved and is at least two. Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>
        <numerusform>在一个或多个被选中的 %n房间里，唯一使用的符号是&quot;%1&quot;，删除它将从所有被选中的房间清除，或以新的符号替代。</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/dlgRoomSymbol.cpp" line="86"/>
      <source>The symbol is &quot;%1&quot; in the selected room,
delete this to clear the symbol or replace
it with a new symbol for this room:</source>
      <comment>This is for when applying a new room symbol to one room. Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>选择的房间符号为 &quot;%1&quot;，点击此处以清除符号或使用新符号替换此房间符号:</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/dlgRoomSymbol.cpp" line="95"/>
      <source>Choose:
 • an existing symbol from the list below (sorted by most commonly used first)
 • enter one or more graphemes (&quot;visible characters&quot;) as a new symbol
 • enter a space to clear any existing symbols
for all of the %n selected room(s):</source>
      <comment>Use line feeds to format text into a reasonable rectangle if needed, %n is the number of rooms involved.</comment>
      <translation>
        <numerusform>从以下列表中选择：
 • 现有符号（按最常用的第一顺序排序）
 • 输入一个或多个字形（&quot;可见字符&quot;）作为新符号
 • 输入空格以清除所有符号
适用于所有选中的 %n 房间：</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/dlgRoomSymbol.cpp" line="129"/>
      <source>%1 {count:%2}</source>
      <comment>Everything after the first parameter (the &apos;%1&apos;) will be removed by processing it as a QRegularExpression programmatically, ensure the translated text has ` {` immediately after the &apos;%1&apos;, and &apos;}&apos; as the very last character, so that the right portion can be extracted if the user clicks on this item when it is shown in the QComboBox it is put in.</comment>
      <translation>%1 {计数: %2}</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomSymbol.cpp" line="200"/>
      <source>Pick color</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>dlgTriggerEditor</name>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="251"/>
      <source>-- Enter your lua code here
</source>
      <translation>-- 在此输入您的lua代码
</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="331"/>
      <source>*** starting new session ***
</source>
      <translation>*** 开始新的会话 ***
</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="419"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5838"/>
      <source>Triggers</source>
      <translation>触发器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="420"/>
      <source>Show Triggers</source>
      <translation>显示触发器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="423"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5862"/>
      <source>Buttons</source>
      <translation>按钮</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="424"/>
      <source>Show Buttons</source>
      <translation>显示按钮</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="428"/>
      <source>Aliases</source>
      <translation>别名</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="429"/>
      <source>Show Aliases</source>
      <translation>显示别名</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="433"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5844"/>
      <source>Timers</source>
      <translation>定时器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="434"/>
      <source>Show Timers</source>
      <translation>显示定时器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="437"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5850"/>
      <source>Scripts</source>
      <translation>脚本</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="438"/>
      <source>Show Scripts</source>
      <translation>显示脚本</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="441"/>
      <source>Keys</source>
      <translation>按键</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="442"/>
      <source>Show Keybindings</source>
      <translation>显示按键绑定</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="445"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="6250"/>
      <source>Variables</source>
      <translation>变量</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="446"/>
      <source>Show Variables</source>
      <translation>显示变量</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="449"/>
      <source>Activate</source>
      <translation>启用</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="450"/>
      <source>Toggle Active or Non-Active Mode for Triggers, Scripts etc.</source>
      <translation>切换触发器、脚本等的启用、停用状态</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="460"/>
      <source>Add Item</source>
      <translation>添加条目</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="461"/>
      <source>Add new Trigger, Script, Alias or Filter</source>
      <translation>添加新的触发器、脚本、别名或过滤器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="464"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="466"/>
      <source>Delete Item</source>
      <translation>删除条目</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="465"/>
      <source>Delete Trigger, Script, Alias or Filter</source>
      <translation>删除触发器、脚本、别名或过滤器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="472"/>
      <source>Add Group</source>
      <translation>添加组</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="473"/>
      <source>Add new Group</source>
      <translation>添加新的组</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="476"/>
      <source>Save Item</source>
      <translation>保存条目</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="477"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8376"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8401"/>
      <source>Ctrl+S</source>
      <translation>Ctrl+S</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="479"/>
      <source>Saves the selected item. (Ctrl+S)&lt;/p&gt;Saving causes any changes to the item to take effect.
It will not save to disk, so changes will be lost in case of a computer/program crash (but Save Profile to the right will be secure.)</source>
      <translation>保存选择的条目。 (Ctrl+S)&lt;/p&gt;保存会导致对该项目的任何更改生效。
它不会存到磁盘，所以当计算机/程序崩溃时会丢失更改（右侧的保存配置按钮更安全）。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="481"/>
      <source>Saves the selected trigger, script, alias, etc, causing new changes to take effect - does not save to disk though...</source>
      <translation>保存选定的触发器、脚本、别名等，会使更改生效，但不会保存到磁盘...</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="484"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8867"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8873"/>
      <source>Copy</source>
      <translation>复制</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="488"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="489"/>
      <source>Copy the trigger/script/alias/etc</source>
      <translation>复制触发器/脚本/别名/等等</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="498"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8868"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8874"/>
      <source>Paste</source>
      <translation>粘贴</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="502"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="503"/>
      <source>Paste triggers/scripts/aliases/etc from the clipboard</source>
      <translation>从剪贴板粘贴 触发器/脚本/别名/其他</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="517"/>
      <source>Import</source>
      <translation>导入</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="521"/>
      <source>Export</source>
      <translation>导出</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="525"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8711"/>
      <source>Save Profile</source>
      <translation>保存配置</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="527"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8378"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8403"/>
      <source>Ctrl+Shift+S</source>
      <translation>Ctrl+Shift+S</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="530"/>
      <source>Saves your profile. (Ctrl+Shift+S)&lt;p&gt;Saves your entire profile (triggers, aliases, scripts, timers, buttons and keys, but not the map or script-specific settings) to your computer disk, so in case of a computer or program crash, all changes you have done will be retained.&lt;/p&gt;&lt;p&gt;It also makes a backup of your profile, you can load an older version of it when connecting.&lt;/p&gt;&lt;p&gt;Should there be any modules that are marked to be &quot;&lt;i&gt;synced&lt;/i&gt;&quot; this will also cause them to be saved and reloaded into other profiles if they too are active.</source>
      <translation>保存您的个人资料。(Ctrl_Shift_S)&lt;p&gt;将整个配置文件(触发器、别名、脚本、计时器、按钮和键,而不是地图或特定于脚本的设置)保存到计算机磁盘,因此,如果计算机或程序崩溃,您所做的所有更改都将保留。&lt;/p&gt;&lt;p&gt;它还会备份您的配置文件,您可以在连接时加载其旧版本。&lt;/p&gt;&lt;p&gt;是否有任何模块标记为 &quot;&lt;i&gt;同步&lt;/i&gt;&quot; 这还会导致它们被保存并重新加载到其他配置文件,如果他们也是活动。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="532"/>
      <source>Saves your entire profile (triggers, aliases, scripts, timers, buttons and keys, but not the map or script-specific settings); also &quot;synchronizes&quot; modules that are so marked.</source>
      <translation>保存您的整个配置文件（触发器、别名、脚本、定时器、按钮和键，但不能保存地图或脚本特定设置）；同时也将 同步 被标记的模块。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="535"/>
      <source>Save Profile As</source>
      <translation>配置另存为</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="539"/>
      <source>Statistics</source>
      <translation>统计</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="540"/>
      <source>Generates a statistics summary display on the main profile console.</source>
      <translation>生成统计结果并显示在主配置控制台。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="544"/>
      <source>Shows/Hides the errors console in the bottom right of this editor.</source>
      <translation>在右侧编辑器底部显示/隐藏错误控制台</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="547"/>
      <source>Debug</source>
      <translation>调试</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="548"/>
      <source>Activates Debug Messages -&gt; system will be &lt;b&gt;&lt;i&gt;slower&lt;/i&gt;&lt;/b&gt;.</source>
      <translation>启动调试信息-&gt;系统会&lt;b&gt;&lt;i&gt;变慢&lt;/i&gt;&lt;/b&gt;。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="549"/>
      <source>Shows/Hides the separate Central Debug Console - when being displayed the system will be slower.</source>
      <translation>显示/隐藏分离的中央调试控制台——显示可能会使系统变慢。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="572"/>
      <source>Editor Toolbar - %1 - Actions</source>
      <comment>This is the toolbar that is initally placed at the top of the editor.</comment>
      <translation>编辑器工具栏 - %1 - 操作</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="608"/>
      <source>Editor Toolbar - %1 - Items</source>
      <comment>This is the toolbar that is initally placed at the left side of the editor.</comment>
      <translation>编辑器工具栏 - %1 - 项</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="672"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="675"/>
      <source>Search Options</source>
      <translation>搜索选项</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="679"/>
      <source>Case sensitive</source>
      <translation>区分大小写</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="732"/>
      <source>Type</source>
      <comment>Heading for the first column of the search results</comment>
      <translation>类型</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="733"/>
      <source>Name</source>
      <comment>Heading for the second column of the search results</comment>
      <translation>名称</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="734"/>
      <source>Where</source>
      <comment>Heading for the third column of the search results</comment>
      <translation>地点</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="735"/>
      <source>What</source>
      <comment>Heading for the fourth column of the search results</comment>
      <translation>什么</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="782"/>
      <source>start of line</source>
      <translation>行首</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="815"/>
      <source>Text to find (trigger pattern)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2785"/>
      <source>Trying to activate a trigger group, filter or trigger or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>尝试激活触发器组，过滤器, 触发器或模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及包含的组件 &lt;em&gt;成功&lt;/em&gt;。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2787"/>
      <source>Trying to deactivate a trigger group, filter or trigger or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>尝试停用一种触发组、过滤器或触发器或部件的模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 包含它们的组件 &lt;em&gt;成功&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2791"/>
      <source>&lt;b&gt;Unable to activate a filter or trigger or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;b&gt;无法激活过滤器或触发器或模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及包含的组件； 原因： %2&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;您需要在修复后重新激活。&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2928"/>
      <source>Trying to activate a timer group, offset timer, timer or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>试图激活计时器组，计时器或部件的模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及包含的组件 &lt;em&gt;成功&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2930"/>
      <source>Trying to deactivate a timer group, offset timer, timer or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>试图停用计时器组，计时器或部件的模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及包含的组件 &lt;em&gt;成功&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2934"/>
      <source>&lt;p&gt;&lt;b&gt;Unable to activate an offset timer or timer or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;b&gt;无法激活定时器或其相关模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及包含的组件； 原因： %2&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;您需要在修复后重新激活。&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2972"/>
      <source>Trying to activate an alias group, alias or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>尝试激活一个别名组，别名或相关模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及其包含的组件 &lt;em&gt;成功&lt;/em&gt;。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2974"/>
      <source>Trying to deactivate an alias group, alias or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>尝试停用一个别名组，别名或相关模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及其包含的组件 &lt;em&gt;成功&lt;/em&gt;。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2978"/>
      <source>&lt;p&gt;&lt;b&gt;Unable to activate an alias or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;b&gt;无法激活别名或其相关模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及包含的组件； 原因： %2&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;您需要在修复后重新激活。&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3076"/>
      <source>Trying to activate a script group, script or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>尝试激活一个脚本组，一个脚本或相关模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及其包含的组件 &lt;em&gt;成功&lt;/em&gt;。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3078"/>
      <source>Trying to deactivate a script group, script or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>尝试停用一个脚本组，一个脚本或相关模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及其包含的组件 &lt;em&gt;成功&lt;/em&gt;。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3082"/>
      <source>&lt;p&gt;&lt;b&gt;Unable to activate a script group or script or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;b&gt;无法激活脚本或其相关模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及包含的组件； 原因： %2&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;您需要在修复后重新激活。&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3147"/>
      <source>Trying to activate a button/menu/toolbar or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>尝试激活一个按钮/菜单/工具栏或相关模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及其包含的组件 &lt;em&gt;成功&lt;/em&gt;。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3149"/>
      <source>Trying to deactivate a button/menu/toolbar or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>尝试停用一个按钮/菜单/工具条或相关模块 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及其包含的组件 &lt;em&gt;成功&lt;/em&gt;。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3153"/>
      <source>&lt;p&gt;&lt;b&gt;Unable to activate a button/menu/toolbar or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;b&gt;无法激活按钮/菜单/工具栏 &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; 及包含的组件； 原因： %2&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;您需要在修复后重新激活。&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3267"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4097"/>
      <source>New trigger group</source>
      <translation>新建触发器组</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3269"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4097"/>
      <source>New trigger</source>
      <translation>新建触发器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3368"/>
      <source>New timer group</source>
      <translation>新建计时器组</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3370"/>
      <source>New timer</source>
      <translation>新建计时器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3458"/>
      <source>Table name...</source>
      <translation>表名...</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3465"/>
      <source>Variable name...</source>
      <translation>变量名</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3522"/>
      <source>New key group</source>
      <translation>新按键组</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3524"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4797"/>
      <source>New key</source>
      <translation>新按键</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3606"/>
      <source>New alias group</source>
      <translation>新建别名组</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3608"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4205"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4275"/>
      <source>New alias</source>
      <translation>新建别名</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3697"/>
      <source>New menu</source>
      <translation>新建菜单</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3699"/>
      <source>New button</source>
      <translation>新建按钮</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3730"/>
      <source>New toolbar</source>
      <translation>新建工具栏</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3783"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4524"/>
      <source>New script group</source>
      <translation>新建脚本组</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3785"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4524"/>
      <source>New script</source>
      <translation>新建脚本</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4219"/>
      <source>Alias &lt;em&gt;%1&lt;/em&gt; has an infinite loop - substitution matches its own pattern. Please fix it - this alias isn&apos;t good as it&apos;ll call itself forever.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4762"/>
      <source>Checked variables will be saved and loaded with your profile.</source>
      <translation>选中的变量将被保存并会和您的配置文件一起加载。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4897"/>
      <source>match on the prompt line</source>
      <translation>在提示行匹配</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4900"/>
      <source>match on the prompt line (disabled)</source>
      <translation>在提示行匹配(停用)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4901"/>
      <source>A Go-Ahead (GA) signal from the game is required to make this feature work</source>
      <translation>需要游戏中有Go-Ahead (GA) 信号才能使本功能运行</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4951"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5061"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8610"/>
      <source>Foreground color ignored</source>
      <comment>Color trigger ignored foreground color button, ensure all three instances have the same text</comment>
      <translation>忽略的前景色</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4955"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5065"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8613"/>
      <source>Default foreground color</source>
      <comment>Color trigger default foreground color button, ensure all three instances have the same text</comment>
      <translation>设置前景色</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4959"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5069"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8616"/>
      <source>Foreground color [ANSI %1]</source>
      <comment>Color trigger ANSI foreground color button, ensure all three instances have the same text</comment>
      <translation>前景色 [ANSI %1]</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4966"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5076"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8673"/>
      <source>Background color ignored</source>
      <comment>Color trigger ignored background color button, ensure all three instances have the same text</comment>
      <translation>忽略的背景色</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4970"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5080"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8676"/>
      <source>Default background color</source>
      <comment>Color trigger default background color button, ensure all three instances have the same text</comment>
      <translation>默认背景颜色</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4974"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5084"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8679"/>
      <source>Background color [ANSI %1]</source>
      <comment>Color trigger ANSI background color button, ensure all three instances have the same text</comment>
      <translation>背景色[ANSI %1]</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5095"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5097"/>
      <source>fault</source>
      <translation>故障</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5150"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5154"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8499"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8525"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="9017"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="9018"/>
      <source>keep</source>
      <comment>Keep the existing colour on matches to highlight. Use shortest word possible so it fits on the button</comment>
      <translation>保持</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5611"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8473"/>
      <source>Command:</source>
      <translation>命令:</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5650"/>
      <source>Menu properties</source>
      <translation>菜单属性</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5660"/>
      <source>Button properties</source>
      <translation>按钮属性</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5668"/>
      <source>Command (down);</source>
      <translation>命令 (Down);</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5856"/>
      <source>Aliases - Input Triggers</source>
      <translation>别名 - 输入触发器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5868"/>
      <source>Key Bindings</source>
      <translation>按键绑定</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7606"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7610"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7630"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7634"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7654"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7658"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7678"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7682"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7702"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7706"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7726"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7731"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7751"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7755"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7774"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7778"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7797"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7801"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7820"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7824"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7843"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7847"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7866"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7871"/>
      <source>Export Package:</source>
      <translation>导出包:</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7606"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7610"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7630"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7634"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7654"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7658"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7678"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7682"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7702"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7706"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7726"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7731"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7751"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7755"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7774"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7778"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7797"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7801"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7820"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7824"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7843"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7847"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7866"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7871"/>
      <source>You have to choose an item for export first. Please select a tree item and then click on export again.</source>
      <translation>您必须先选择要导出的项目。 请选择一个树项，然后再次点击导出。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7615"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7639"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7663"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7687"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7711"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7736"/>
      <source>Package %1 saved</source>
      <translation>包 %1 已保存</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7760"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7783"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7806"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7829"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7852"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7876"/>
      <source>Copied %1 to clipboard</source>
      <translation>复制的 %1至到剪贴板</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7886"/>
      <source>Export Triggers</source>
      <translation>导出触发器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7886"/>
      <source>Mudlet packages (*.xml)</source>
      <translation>Mudlet包(*.xml)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7900"/>
      <source>export package:</source>
      <translation>导出包:</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7900"/>
      <source>Cannot write file %1:
%2.</source>
      <translation>无法写入文件 %1：
%2。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8171"/>
      <source>Import Mudlet Package</source>
      <translation>导入Mudlet包</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8178"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8192"/>
      <source>Import Mudlet Package:</source>
      <translation>导入Mudlet包:</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8178"/>
      <source>Cannot read file %1:
%2.</source>
      <translation>无法读取文件 %1：
%2。</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8192"/>
      <source>Package %1 is already installed.</source>
      <translation>已安装软件包 %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8323"/>
      <source>Couldn&apos;t save profile</source>
      <translation>无法保存用户配置文件</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8323"/>
      <source>Sorry, couldn&apos;t save your profile - got the following error: %1</source>
      <translation>对不起, 以下错误导致无法保存用户配置文件: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8330"/>
      <source>Backup Profile</source>
      <translation>备份配置文件</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8330"/>
      <source>trigger files (*.trigger *.xml)</source>
      <translation>触发器文件（*.trigger *.xml）</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8460"/>
      <source>Seclect Icon</source>
      <translation>选择图标</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8460"/>
      <source>Images (*.png *.xpm *.jpg)</source>
      <translation>图像文件 (*.png *.xpm *.jpg)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8469"/>
      <source>Command (down):</source>
      <translation>命令 (Down):</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8490"/>
      <source>Select foreground color to apply to matches</source>
      <translation>选择要应用到匹配项的前景色</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8516"/>
      <source>Select background color to apply to matches</source>
      <translation>选择要应用于匹配项的背景色</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8534"/>
      <source>Choose sound file</source>
      <translation>选择声音文件</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8538"/>
      <source>Audio files(*.aac *.mp3 *.mp4a *.oga *.ogg *.pcm *.wav *.wma);;Advanced Audio Coding-stream(*.aac);;MPEG-2 Audio Layer 3(*.mp3);;MPEG-4 Audio(*.mp4a);;Ogg Vorbis(*.oga *.ogg);;PCM Audio(*.pcm);;Wave(*.wav);;Windows Media Audio(*.wma);;All files(*.*)</source>
      <comment>This the list of file extensions that are considered for sounds from triggers, the terms inside of the &apos;(&apos;...&apos;)&apos; and the &quot;;;&quot; are used programmatically and should not be changed.</comment>
      <translation>音频文件(*.aac *.mp3 *.mp4a *.oga *.ogg *.pcm *.wav *.wma);;Advanced Audio Coding-stream(*.aac);;MPEG-2 Audio Layer 3(*.mp3);;MPEG-4 Audio(*.mp4a);;Ogg Vorbis(*.oga *.ogg);;PCM Audio(*.pcm);;Wave(*.wav);;Windows Media Audio(*.wma);;所有文件(*.*)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8591"/>
      <source>Select foreground trigger color for item %1</source>
      <translation>为项目 %1 选择前景触发器颜色</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8655"/>
      <source>Select background trigger color for item %1</source>
      <translation>为项目 %1 选择背景触发器颜色</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8704"/>
      <source>Saving…</source>
      <translation>正在保存…</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8863"/>
      <source>Format All</source>
      <translation>全部格式化</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8866"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8872"/>
      <source>Cut</source>
      <translation>剪切</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8870"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8876"/>
      <source>Select All</source>
      <translation>选择全部</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="9032"/>
      <source>&lt;p&gt;Sound file to play when the trigger fires.&lt;/p&gt;</source>
      <translation>&lt;p&gt;触发触发器时要播放的声音文件. &lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="780"/>
      <source>substring</source>
      <translation>子字符串</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="103"/>
      <source>&lt;p&gt;Alias react on user input. To add a new alias:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Define an input &lt;strong&gt;pattern&lt;/strong&gt; either literally or with a Perl regular expression.&lt;/li&gt;&lt;li&gt;Define a &apos;substitution&apos; &lt;strong&gt;command&lt;/strong&gt; to send to the game in clear text &lt;strong&gt;instead of the alias pattern&lt;/strong&gt;, or write a script for more complicated needs.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the alias.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Aliases can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua permAlias(&amp;quot;my greets&amp;quot;, &amp;quot;&amp;quot;, &amp;quot;^hi$&amp;quot;, [[send (&amp;quot;say Greetings, traveller!&amp;quot;) echo (&amp;quot;We said hi!&amp;quot;)]])&lt;/code&gt;&lt;/p&gt;&lt;p&gt;You can now greet by typing &apos;hi&apos;&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="113"/>
      <source>&lt;p&gt;Triggers react on game output. To add a new trigger:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Define a &lt;strong&gt;pattern&lt;/strong&gt; that you want to trigger on.&lt;/li&gt;&lt;li&gt;Select the appropriate pattern &lt;strong&gt;type&lt;/strong&gt;.&lt;/li&gt;&lt;li&gt;Define a clear text &lt;strong&gt;command&lt;/strong&gt; that you want to send to the game if the trigger finds the pattern in the text from the game, or write a script for more complicated needs..&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the trigger.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Triggers can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua permSubstringTrigger(&amp;quot;My drink trigger&amp;quot;, &amp;quot;&amp;quot;, &amp;quot;You are thirsty.&amp;quot;, function() send(&amp;quot;drink water&amp;quot;) end)&lt;/code&gt;&lt;/p&gt;&lt;p&gt;This will keep you refreshed.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="124"/>
      <source>&lt;p&gt;Scripts organize code and can react to events. To add a new script:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Enter a script in the box below. You can for example define &lt;strong&gt;functions&lt;/strong&gt; to be called by other triggers, aliases, etc.&lt;/li&gt;&lt;li&gt;If you write lua &lt;strong&gt;commands&lt;/strong&gt; without defining a function, they will be run on Mudlet startup and each time you open the script for editing.&lt;/li&gt;&lt;li&gt;If needed, you can register a list of &lt;strong&gt;events&lt;/strong&gt; with the + and - symbols. If one of these events take place, the function with the same name as the script item itself will be called.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the script.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Scripts are run automatically when viewed, even if they are deactivated.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Events can also be added to a script from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua registerAnonymousEventHandler(&amp;quot;nameOfTheMudletEvent&amp;quot;, &amp;quot;nameOfYourFunctionToBeCalled&amp;quot;)&lt;/code&gt;&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="135"/>
      <source>&lt;p&gt;Timers react after a timespan once or regularly. To add a new timer:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Define the &lt;strong&gt;timespan&lt;/strong&gt; after which the timer should react in a this format: hours : minutes : seconds.&lt;/li&gt;&lt;li&gt;Define a clear text &lt;strong&gt;command&lt;/strong&gt; that you want to send to the game when the time has passed, or write a script for more complicated needs.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the timer.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; If you want the trigger to react only once and not regularly, use the Lua tempTimer() function instead.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Timers can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua tempTimer(3, function() echo(&amp;quot;hello!
&amp;quot;) end)&lt;/code&gt;&lt;/p&gt;&lt;p&gt;This will greet you exactly 3 seconds after it was made.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="146"/>
      <source>&lt;p&gt;Buttons react on mouse clicks. To add a new button:&lt;ol&gt;&lt;li&gt;Add a new group to define a new &lt;strong&gt;button bar&lt;/strong&gt; in case you don&apos;t have any.&lt;/li&gt;&lt;li&gt;Add new groups as &lt;strong&gt;menus&lt;/strong&gt; to a button bar or sub-menus to menus.&lt;li&gt;&lt;li&gt;Add new items as &lt;strong&gt;buttons&lt;/strong&gt; to a button bar or menu or sub-menu.&lt;/li&gt;&lt;li&gt;Define a clear text &lt;strong&gt;command&lt;/strong&gt; that you want to send to the game if the button is pressed, or write a script for more complicated needs.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the toolbar, menu or button. &lt;/li&gt;&lt;/ol&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Deactivated items will be hidden and if they are toolbars or menus then all the items they contain will be also be hidden.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; If a button is made a &lt;strong&gt;click-down&lt;/strong&gt; button then you may also define a clear text command that you want to send to the game when the button is pressed a second time to uncheck it or to write a script to run when it happens - within such a script the Lua &apos;getButtonState()&apos; function reports whether the button is up or down.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="156"/>
      <source>&lt;p&gt;Keys react on keyboard presses. To add a new key binding:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Click on &lt;strong&gt;&apos;grab key&apos;&lt;/strong&gt; and then press your key combination, e.g. including modifier keys like Control, Shift, etc.&lt;/li&gt;&lt;li&gt;Define a clear text &lt;strong&gt;command&lt;/strong&gt; that you want to send to the game if the button is pressed, or write a script for more complicated needs.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the new key binding.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Keys can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua permKey(&amp;quot;my jump key&amp;quot;, &amp;quot;&amp;quot;, mudlet.key.F8, [[send(&amp;quot;jump&amp;quot;]]) end)&lt;/code&gt;&lt;/p&gt;&lt;p&gt;Pressing F8 will make you jump.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="166"/>
      <source>&lt;p&gt;Variables store information. To make a new variable:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above. To add a table instead click &apos;Add Group&apos;.&lt;/li&gt;&lt;li&gt;Select type of variable value (can be a string, integer, boolean)&lt;/li&gt;&lt;li&gt;Enter the value you want to store in this variable.&lt;/li&gt;&lt;li&gt;If you want to keep the variable in your next Mudlet sessions, check the checkbox in the list of variables to the left.&lt;/li&gt;&lt;li&gt;To remove a variable manually, set it to &apos;nil&apos; or click on the &apos;Delete&apos; icon above.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Variables created here won&apos;t be saved when Mudlet shuts down unless you check their checkbox in the list of variables to the left. You could also create scripts with the variables instead.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Variables and tables can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua foo = &amp;quot;bar&amp;quot;&lt;/code&gt;&lt;/p&gt;&lt;p&gt;This will create a string called &apos;foo&apos; with &apos;bar&apos; as its value.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="241"/>
      <source>-- add your Lua code here</source>
      <translation>-- 在这里添加你的 Lua 代码</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="543"/>
      <source>Errors</source>
      <translation>错误：</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="682"/>
      <source>Match case precisely</source>
      <translation>精确匹配大小写</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="686"/>
      <source>Include variables</source>
      <translation>包含变量</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="689"/>
      <source>Search variables (slower)</source>
      <translation>搜索变量（较慢）</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="781"/>
      <source>perl regex</source>
      <translation>perl正则</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="783"/>
      <source>exact match</source>
      <translation>完全匹配</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="784"/>
      <source>lua function</source>
      <translation>Lua函数</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="785"/>
      <source>line spacer</source>
      <translation>行间距</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="786"/>
      <source>color trigger</source>
      <translation>颜色触发器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="787"/>
      <source>prompt</source>
      <translation>提示</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1914"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1926"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1954"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1986"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2016"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2028"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2055"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2090"/>
      <source>Trigger</source>
      <translation>触发器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1434"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1477"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1549"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1621"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1743"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1827"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1914"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2016"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2122"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2211"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2297"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2421"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2495"/>
      <source>Name</source>
      <translation>名称</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1489"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1494"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1561"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1566"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1633"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1638"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1837"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1842"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1926"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1931"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2028"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2033"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2132"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2137"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2309"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2314"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2433"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2438"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2507"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2512"/>
      <source>Command</source>
      <translation>命令</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1954"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1959"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2055"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2060"/>
      <source>Pattern {%1}</source>
      <translation>模式 {%1}</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1519"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1524"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1591"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1596"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1713"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1718"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1797"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1802"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1884"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1889"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1986"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1991"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2090"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2095"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2179"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2184"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2265"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2270"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2389"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2394"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2463"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2468"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2537"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2542"/>
      <source>Lua code (%1:%2)</source>
      <translation>Lua 代码 (%1:%2)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1827"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1837"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1854"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1884"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2122"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2132"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2149"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2179"/>
      <source>Alias</source>
      <translation>別名</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1854"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1859"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2149"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2154"/>
      <source>Pattern</source>
      <translation>匹配</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1743"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1765"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1797"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2211"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2233"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2265"/>
      <source>Script</source>
      <translation>脚本</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1765"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1770"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2233"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2238"/>
      <source>Event Handler</source>
      <translation>事件处理程序</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1621"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1633"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1652"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1713"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2297"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2309"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2328"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2389"/>
      <source>Button</source>
      <translation>按钮</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1633"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1638"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2309"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2314"/>
      <source>Command {Down}</source>
      <translation>命令 {Down}</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1652"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1657"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2328"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2333"/>
      <source>Command {Up}</source>
      <translation>命令 {Up}</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1681"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2357"/>
      <source>Action</source>
      <translation>操作</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1681"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1686"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2357"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2362"/>
      <source>Stylesheet {L: %1 C: %2}</source>
      <translation>样式表 {L: %1 C: %2}</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1549"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1561"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1591"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2421"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2433"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2463"/>
      <source>Timer</source>
      <translation>计时器</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1477"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1489"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1519"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2495"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2507"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2537"/>
      <source>Key</source>
      <translation>按键</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1434"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1448"/>
      <source>Variable</source>
      <translation>变量</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1448"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1454"/>
      <source>Value</source>
      <translation>值</translation>
    </message>
  </context>
  <context>
    <name>dlgTriggerPatternEdit</name>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="52"/>
      <source>Text to find (anywhere in the game output)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="55"/>
      <source>Text to find (as a regular expression pattern)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="58"/>
      <source>Text to find (from beginning of the line)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="61"/>
      <source>Exact line to match</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="64"/>
      <source>Lua code to run (return true to match)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>dlgVarsMainArea</name>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="51"/>
      <location filename="../src/dlgVarsMainArea.cpp" line="78"/>
      <source>Auto-Type</source>
      <translation>自动类型</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="52"/>
      <source>key (string)</source>
      <translation>按键(字符串)</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="53"/>
      <source>index (integer number)</source>
      <translation>索引(整数)</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="54"/>
      <source>table (use &quot;Add Group&quot; to create)</source>
      <translation>table (使用 &quot;Add Group&quot; 来创建)</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="55"/>
      <source>function (cannot create from GUI)</source>
      <translation>函数(无法从GUI创建)</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="79"/>
      <source>string</source>
      <translation>字符串</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="80"/>
      <source>number</source>
      <translation>数字</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="81"/>
      <source>boolean</source>
      <translation>布尔值</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="82"/>
      <source>table</source>
      <translation>表</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="83"/>
      <source>function</source>
      <translation>函数</translation>
    </message>
  </context>
  <context>
    <name>edbee::TextEditorComponent</name>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/components/texteditorcomponent.cpp" line="578"/>
      <source>Cut</source>
      <translation>剪切</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/components/texteditorcomponent.cpp" line="579"/>
      <source>Copy</source>
      <translation>复制</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/components/texteditorcomponent.cpp" line="580"/>
      <source>Paste</source>
      <translation>粘贴</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/components/texteditorcomponent.cpp" line="582"/>
      <source>Select All</source>
      <translation>全选</translation>
    </message>
  </context>
  <context>
    <name>irc</name>
    <message>
      <location filename="../src/ui/irc.ui" line="25"/>
      <source>Mudlet IRC Client</source>
      <translation>Mudlet IRC 客户端</translation>
    </message>
  </context>
  <context>
    <name>keybindings_main_area</name>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="23"/>
      <source>Name:</source>
      <translation>名称:</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="33"/>
      <source>&lt;p&gt;Choose a good, ideally unique, name for your key or key group. This will be displayed in the key tree.&lt;/p&gt;</source>
      <translation>&lt;p&gt;为你的按键或按键组选择一个好的、唯一的名字。它将显示在按键树上。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="40"/>
      <source>Command:</source>
      <translation>命令:</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="50"/>
      <source>&lt;p&gt;Type in one or more commands you want the key to send directly to the game when pressed. (Optional)&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation>&lt;p&gt;输入一或多个你希望在按下时（可选项）能直接送往游戏中的按键命令。&lt;/p&gt;&lt;p&gt;要送出更复杂的命令，可能要依靠或需要在配置中输入修改了的Lua脚本变量，&lt;i&gt;而不是&lt;/i&gt;在下方的编辑区。此处输入的任何东西，真的将会送往游戏服务器。&lt;/p&gt;&lt;p&gt;允许同时使用&lt;i&gt;Lua脚本&lt;/i&gt;——这将会在脚本运行&lt;b&gt;之前&lt;/b&gt;送出。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="53"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="60"/>
      <source>Key Binding:</source>
      <translation>按键绑定：</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="77"/>
      <source>Grab New Key</source>
      <translation>抓取新按键</translation>
    </message>
  </context>
  <context>
    <name>lacking_mapper_script</name>
    <message>
      <location filename="../src/ui/lacking_mapper_script.ui" line="23"/>
      <source>No mapping script found</source>
      <translation>未找到相关联的脚本</translation>
    </message>
    <message>
      <location filename="../src/ui/lacking_mapper_script.ui" line="35"/>
      <source>&lt;p&gt;It seems that you don&apos;t have any &lt;a href=&quot;http://wiki.mudlet.org/w/Mapping_script&quot;&gt;mapping scripts&lt;/a&gt; installed yet - the mapper needs you to have one for your game, so it can track where you are and autowalk you. You can either make one yourself, or import an existing one that someone else made.&lt;/p&gt;&lt;p&gt;Would you like to see if any are available?&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/lacking_mapper_script.ui" line="86"/>
      <source>Close</source>
      <translation>关闭</translation>
    </message>
    <message>
      <location filename="../src/ui/lacking_mapper_script.ui" line="93"/>
      <source>Find some scripts</source>
      <translation>查找脚本</translation>
    </message>
  </context>
  <context>
    <name>main</name>
    <message>
      <location filename="../src/main.cpp" line="169"/>
      <source>Profile to open automatically</source>
      <translation>要自动打开的配置文件</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="169"/>
      <source>profile</source>
      <translation>单个配置</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="172"/>
      <location filename="../src/main.cpp" line="178"/>
      <source>Display help and exit</source>
      <translation>显示帮助并退出</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="175"/>
      <source>Display version and exit</source>
      <translation>显示版本并退出</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="188"/>
      <source>Usage: %1 [OPTION...]
       -h, --help           displays this message.
       -v, --version        displays version information.
       -q, --quiet          no splash screen on startup.
       --profile=&lt;profile&gt;  additional profile to open

There are other inherited options that arise from the Qt Libraries which are
less likely to be useful for normal use of this application:
</source>
      <translation>用法: %1 [OPTION...]
       -h， --help 显示此消息。
       -v， --version 显示版本信息。
       -q， --quiet 启动时不显示启动屏幕。
       --profile=&lt;profile&gt;  打开其它配置文件

来自Qt库的其他继承的选项，有可能不能
在此应用程序正常使用:
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="245"/>
      <source>%1 %2%3 (with debug symbols, without optimisations)
</source>
      <comment>%1 is the name of the application like mudlet or Mudlet.exe, %2 is the version number like 3.20 and %3 is a build suffix like -dev</comment>
      <translation>%1 %2%3 (带有调试符号，没有优化)
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="251"/>
      <source>Qt libraries %1 (compilation) %2 (runtime)
</source>
      <comment>%1 and %2 are version numbers</comment>
      <translation>Qt库 %1 (编译) %2 (运行时)
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="255"/>
      <source>Licence GPLv2+: GNU GPL version 2 or later - http://gnu.org/licenses/gpl.html
</source>
      <translation>许可证 GPLv2+: GNU GPL 版本 2 或更高版本 - http://gnu.org/licenses/gpl.html
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="256"/>
      <source>This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
</source>
      <translation>这是自由软件：你可以自由改变和重新分配。
请在法律允许的范围内使用。
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="236"/>
      <source>Report bugs to: https://github.com/Mudlet/Mudlet/issues
</source>
      <translation>报告bugs：https://github.com/Mudelet/Mudelet/issues
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="237"/>
      <source>Project home page: http://www.mudlet.org/
</source>
      <translation>项目主页：http://www.mudelet.org/
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="254"/>
      <source>Copyright © 2008-2021  Mudlet developers
</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/main.cpp" line="280"/>
      <source>Version: %1</source>
      <translation>版本: %1</translation>
    </message>
  </context>
  <context>
    <name>main_window</name>
    <message>
      <location filename="../src/ui/main_window.ui" line="95"/>
      <source>Toolbox</source>
      <translation>工具箱</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="109"/>
      <source>Options</source>
      <translation>选项</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="116"/>
      <source>Help</source>
      <translation>帮助</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="126"/>
      <source>About</source>
      <translation>关于</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="134"/>
      <source>Games</source>
      <translation>游戏</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="149"/>
      <source>Play</source>
      <translation>开始</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="152"/>
      <source>&lt;p&gt;Configure connection details of, and make a connection to, game servers.&lt;/p&gt;</source>
      <translation>&lt;p&gt;配置游戏服务器的连接细节并接入。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="160"/>
      <source>&lt;p&gt;Disconnect from the current game server.&lt;/p&gt;</source>
      <translation>&lt;p&gt;从当前游戏服务器断开。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="168"/>
      <source>&lt;p&gt;Disconnect and then reconnect to the current game server.&lt;/p&gt;</source>
      <translation>&lt;p&gt;先断开然后再连接当前游戏服务器。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="176"/>
      <source>&lt;p&gt;Configure setting for the Mudlet application globally and for the current profile.&lt;/p&gt;</source>
      <translation>&lt;p&gt;设定Mudlet应用的全局环境和当前的配置。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="184"/>
      <source>&lt;p&gt;Opens the Editor for the different types of things that can be scripted by the user.&lt;/p&gt;</source>
      <translation>&lt;p&gt;打开不同类型事物编辑器以便用户写脚本。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="213"/>
      <source>IRC</source>
      <translation>IRC</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="216"/>
      <location filename="../src/ui/main_window.ui" line="253"/>
      <source>&lt;p&gt;Opens a built-in IRC chat on the #mudlet channel on Freenode IRC servers.&lt;/p&gt;</source>
      <translation>&lt;p&gt;打开内建的IRC并在Freenode IRC 服务器的 #mudlet 频道上聊天。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="224"/>
      <source>&lt;p&gt;Opens an (on-line) collection of &quot;Educational Mudlet screencasts&quot; in your system web-browser.&lt;/p&gt;</source>
      <translation>&lt;p&gt;在你的系统网页浏览器中打开（在线）&quot;Mudlet的教学视频&quot;集。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="232"/>
      <source>&lt;p&gt;Load a previous saved game session that can be used to test Mudlet lua systems (off-line!).&lt;/p&gt;</source>
      <translation>&lt;p&gt;加载之前保存的游戏会话，该会话可用于测试 Mudlet lua 系统(离线!)。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="240"/>
      <source>&lt;p&gt;Opens the (on-line) Mudlet Forum in your system web-browser.&lt;/p&gt;</source>
      <translation>&lt;p&gt;在你的系统网页浏览器中打开（在线）Mudlet论坛。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="261"/>
      <source>&lt;p&gt;Show or hide the game map.&lt;/p&gt;</source>
      <translation>&lt;p&gt;显示或隐藏游戏地图。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="269"/>
      <source>&lt;p&gt;Install and remove collections of Mudlet lua items (packages).&lt;/p&gt;</source>
      <translation>&lt;p&gt;安装和删除Mudlet Lua项的合集（包）。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="277"/>
      <source>&lt;p&gt;Install and remove (share- &amp; sync-able) collections of Mudlet lua items (modules).&lt;/p&gt;</source>
      <translation>&lt;p&gt;安装和移除（可共享和同步的）Mudlet Lua项的合集（模块）。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="285"/>
      <source>&lt;p&gt;Gather and bundle up collections of Mudlet Lua items and other reasources into a module.&lt;/p&gt;</source>
      <translation>&lt;p&gt;收集并打包Mudlet Lua项的合集以及其它资源到模块中去。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="316"/>
      <source>&lt;p&gt;Hide / show the search area and buttons at the bottom of the screen.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="321"/>
      <source>Discord help channel</source>
      <translation>Discord帮助频道</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="326"/>
      <location filename="../src/ui/main_window.ui" line="329"/>
      <source>Report an issue</source>
      <translation>报告此问题</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="332"/>
      <source>The public test build gets newer features to you quicker, and you help us find issues in them quicker. Spotted something odd? Let us know asap!</source>
      <translation>公测版将更新的功能更快地送到你手中，你也能帮助我们更快地发现其中的问题。发现了什么奇怪的东西？请尽快告诉我们</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="157"/>
      <source>Disconnect</source>
      <translation>断开连接</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="165"/>
      <source>Reconnect</source>
      <translation>重新连接</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="173"/>
      <source>Preferences</source>
      <translation>首选项</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="181"/>
      <source>Script editor</source>
      <translation>脚本编辑器</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="189"/>
      <source>Notepad</source>
      <translation>记事本</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="197"/>
      <source>API Reference</source>
      <translation>API参考文档</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="237"/>
      <source>Online forum</source>
      <translation>在线论坛</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="205"/>
      <source>About Mudlet</source>
      <translation>关于 Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="192"/>
      <source>&lt;p&gt;Opens a free form text editor window for this profile that is saved between sessions.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="200"/>
      <source>&lt;p&gt;Opens the Mudlet manual in your web browser.&lt;/p&gt;</source>
      <translation>&lt;p&gt;在浏览器中打开Mudlet手册。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="208"/>
      <source>&lt;p&gt;Inform yourself about this version of Mudlet, the people who made it and the licence under which you can share it.&lt;/p&gt;</source>
      <comment>Tooltip for About Mudlet sub-menu item and main toolbar button (or menu item if an update has changed that control to have a popup menu instead) (Used in 3 places - please ensure all have the same translation).</comment>
      <translation>&lt;p&gt;告知你自己Mudlet的版本号、谁创造了它、你在什么协议下可以分享它。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="221"/>
      <source>Video tutorials</source>
      <translation>视频教程</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="229"/>
      <source>Load replay</source>
      <translation>载入回放</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="245"/>
      <source>Check for updates...</source>
      <translation>检查更新……</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="250"/>
      <source>Live help chat</source>
      <translation>在线帮助聊天</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="258"/>
      <source>Show map</source>
      <translation>显示地图</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="266"/>
      <source>Package manager</source>
      <translation>包管理器</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="274"/>
      <source>Module manager</source>
      <translation>模块管理器</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="282"/>
      <source>Package exporter (experimental)</source>
      <translation>包输出（实验阶段）</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="299"/>
      <source>MultiView</source>
      <translation>多视图</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="302"/>
      <source>&lt;p&gt;Splits the Mudlet screen to show multiple profiles at once; disabled when less than two are loaded.&lt;/p&gt;</source>
      <comment>Same text is used in 2 places.</comment>
      <translation>&lt;p&gt;分割 Mudlet 屏幕以一次显示多个配置文件; 若加载的配置文件小于2个时则禁用此功能。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="307"/>
      <source>Compact input line</source>
      <translation>简洁的输入行</translation>
    </message>
  </context>
  <context>
    <name>mapper</name>
    <message>
      <location filename="../src/ui/mapper.ui" line="60"/>
      <source>^</source>
      <translation>^</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="452"/>
      <source>Area:</source>
      <translation>区域:</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="521"/>
      <source>Rooms</source>
      <translation>房间</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="550"/>
      <source>Exits</source>
      <translation>出口</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="579"/>
      <source>Round</source>
      <translation>圆角</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="586"/>
      <source>Info</source>
      <translation>信息</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="602"/>
      <source>IDs</source>
      <translation>IDs</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="618"/>
      <source>Names</source>
      <translation>名称</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="771"/>
      <source>top + 1</source>
      <translation>top+1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="745"/>
      <source>bottom + 1</source>
      <translation>bottom + 1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="758"/>
      <source>bottom -1</source>
      <translation>bottom -1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="784"/>
      <source>top - 1</source>
      <translation>top - 1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="732"/>
      <source>1 level</source>
      <translation>1 level</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="427"/>
      <source>3D</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="680"/>
      <source>default</source>
      <translation>默认</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="693"/>
      <source>top view</source>
      <translation>顶部显示</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="706"/>
      <source>side view</source>
      <translation>侧视图</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="719"/>
      <source>all levels</source>
      <translation>所有级别</translation>
    </message>
  </context>
  <context>
    <name>module_manager</name>
    <message>
      <location filename="../src/ui/module_manager.ui" line="79"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Modules are a way to utilize a common package across many sessions - unlike packages, which are installed per-profile.&lt;/p&gt;
&lt;p&gt;Modules are loaded in ascending priority (1 will get loaded before 2 and so on), modules with the same priority will be loaded in alphabetical order.&lt;/p&gt;
&lt;p&gt;Modules with negative priority will be loaded before script packages.&lt;/p&gt;
&lt;p&gt;The &lt;b&gt;&lt;i&gt;Sync&lt;/i&gt;&lt;/b&gt; option, if it is enabled, will, when the module in &lt;b&gt;this profile&lt;/b&gt; is saved &lt;b&gt;to disk&lt;/b&gt;, cause it to be then reloaded into all profiles which also are using the same file that contains the module. To make several profiles use the same module, install it in each profile through this module manager (which should be opened when the particular profile is the one currently in the foreground).&lt;/p&gt;&lt;p&gt;
&lt;i&gt;Note: &lt;b&gt;.zip&lt;/b&gt; and &lt;b&gt;.mpackage&lt;/b&gt; modules are currently unable to be synced, only &lt;b&gt;.xml&lt;/b&gt; packages are able to be synchronized across profiles at the moment.&lt;/i&gt;&lt;/p&gt;
&lt;p&gt;For each save operation, modules are backed up to a directory, &lt;i&gt;moduleBackups&lt;/i&gt;, within your Mudlet profile directory.&lt;/p&gt;
&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/module_manager.ui" line="129"/>
      <source>Uninstall</source>
      <translation>卸载</translation>
    </message>
    <message>
      <location filename="../src/ui/module_manager.ui" line="142"/>
      <source>Install</source>
      <translation>安装</translation>
    </message>
    <message>
      <location filename="../src/ui/module_manager.ui" line="149"/>
      <source>Module Help</source>
      <translation>模块帮助</translation>
    </message>
  </context>
  <context>
    <name>mudlet</name>
    <message>
      <location filename="../src/mudlet.cpp" line="718"/>
      <source>Afrikaans</source>
      <extracomment>In the translation source texts the language is the leading term, with, generally, the (primary) country(ies) in the brackets, with a trailing language disabiguation after a &apos;-&apos; Chinese is an exception!</extracomment>
      <translation>南非荷兰文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="719"/>
      <source>Afrikaans (South Africa)</source>
      <translation>南非荷兰语(南非)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="720"/>
      <source>Aragonese</source>
      <translation>阿拉贡语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="721"/>
      <source>Aragonese (Spain)</source>
      <translation>阿拉贡(西班牙)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="722"/>
      <source>Arabic</source>
      <translation>阿拉伯语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="723"/>
      <source>Arabic (United Arab Emirates)</source>
      <translation>阿拉伯语(阿拉伯联合酋长国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="724"/>
      <source>Arabic (Bahrain)</source>
      <translation>阿拉伯语(巴林)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="725"/>
      <source>Arabic (Algeria)</source>
      <translation>阿拉伯语(阿尔及利亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="727"/>
      <source>Arabic (India)</source>
      <translation>阿拉伯语(印度)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="728"/>
      <source>Arabic (Iraq)</source>
      <translation>阿拉伯语(伊拉克)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="729"/>
      <source>Arabic (Jordan)</source>
      <translation>阿拉伯语(约旦)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="730"/>
      <source>Arabic (Kuwait)</source>
      <translation>阿拉伯语(科威特)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="731"/>
      <source>Arabic (Lebanon)</source>
      <translation>阿拉伯语(黎巴嫩)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="732"/>
      <source>Arabic (Libya)</source>
      <translation>阿拉伯语(利比亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="733"/>
      <source>Arabic (Morocco)</source>
      <translation>阿拉伯语(摩洛哥)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="734"/>
      <source>Arabic (Oman)</source>
      <translation>阿拉伯语(也门)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="735"/>
      <source>Arabic (Qatar)</source>
      <translation>阿拉伯语(卡塔尔)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="736"/>
      <source>Arabic (Saudi Arabia)</source>
      <translation>阿拉伯语(沙特阿拉伯)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="737"/>
      <source>Arabic (Sudan)</source>
      <translation>阿拉伯语(约旦)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="738"/>
      <source>Arabic (Syria)</source>
      <translation>阿拉伯语(叙利亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="739"/>
      <source>Arabic (Tunisia)</source>
      <translation>阿拉伯语(突尼斯)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="740"/>
      <source>Arabic (Yemen)</source>
      <translation>阿拉伯语(也门)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="741"/>
      <source>Belarusian</source>
      <translation>白俄罗斯语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="742"/>
      <source>Belarusian (Belarus)</source>
      <translation>白俄罗斯语(白俄罗斯)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="743"/>
      <source>Belarusian (Russia)</source>
      <translation>白俄罗斯语(俄罗斯)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="744"/>
      <source>Bulgarian</source>
      <translation>保加利亚语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="745"/>
      <source>Bulgarian (Bulgaria)</source>
      <translation>保加利亚语(保加利亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="746"/>
      <source>Bangla</source>
      <translation>孟加拉语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="747"/>
      <source>Bangla (Bangladesh)</source>
      <translation>孟加拉语(孟加拉国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="748"/>
      <source>Bangla (India)</source>
      <translation>孟加拉语(印度)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="749"/>
      <source>Tibetan</source>
      <translation>藏语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="750"/>
      <source>Tibetan (China)</source>
      <translation>藏语(中国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="751"/>
      <source>Tibetan (India)</source>
      <translation>藏语(印度)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="752"/>
      <source>Breton</source>
      <translation>布列塔尼语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="753"/>
      <source>Breton (France)</source>
      <translation>布列塔尼语(法国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="754"/>
      <source>Bosnian</source>
      <translation>波斯尼亚语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="755"/>
      <source>Bosnian (Bosnia/Herzegovina)</source>
      <translation>波斯尼亚 (波斯尼亚/黑塞哥维那)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="756"/>
      <source>Bosnian (Bosnia/Herzegovina - Cyrillic alphabet)</source>
      <translation>波斯尼亚语(波斯尼亚/黑塞哥维那-西里尔字母)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="757"/>
      <source>Catalan</source>
      <translation>加泰罗尼亚语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="758"/>
      <source>Catalan (Spain)</source>
      <translation>加泰罗尼亚语(西班牙)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="759"/>
      <source>Catalan (Spain - Valencian)</source>
      <translation>加泰罗尼亚语(西班牙-巴伦西亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="760"/>
      <source>Central Kurdish</source>
      <translation>库尔德中部</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="761"/>
      <source>Central Kurdish (Iraq)</source>
      <translation>库尔德中部 (伊拉克)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="762"/>
      <source>Czech</source>
      <translation>捷克语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="763"/>
      <source>Czech (Czechia)</source>
      <translation>捷克(捷克共和国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="764"/>
      <source>Danish</source>
      <translation>丹麦语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="765"/>
      <source>Danish (Denmark)</source>
      <translation>丹麦语(丹麦)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="766"/>
      <source>German</source>
      <translation>德文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="767"/>
      <source>German (Austria)</source>
      <translation>德语(奥地利)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="768"/>
      <source>German (Austria, revised by F M Baumann)</source>
      <translation>德语(奥地利，经F M Baumann修订)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="769"/>
      <source>German (Belgium)</source>
      <translation>德语 (比利时)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="770"/>
      <source>German (Switzerland)</source>
      <translation>德语(瑞士)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="771"/>
      <source>German (Switzerland, revised by F M Baumann)</source>
      <translation>德语(奥地利，经 F M Baumann修订)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="772"/>
      <source>German (Germany/Belgium/Luxemburg)</source>
      <translation>德语 (德语/比利时/卢森堡)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="773"/>
      <source>German (Germany/Belgium/Luxemburg, revised by F M Baumann)</source>
      <translation>德文（德国/比利时/卢森堡，经 Fm Baumann 修订）</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="774"/>
      <source>German (Liechtenstein)</source>
      <translation>德语(列支敦士登)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="775"/>
      <source>German (Luxembourg)</source>
      <translation>德语(卢森堡)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="776"/>
      <source>Greek</source>
      <translation>希腊文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="777"/>
      <source>Greek (Greece)</source>
      <translation>希腊语(希腊)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="778"/>
      <source>English</source>
      <translation>英语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="779"/>
      <source>English (Antigua/Barbuda)</source>
      <translation>英语 (安提瓜/巴布达)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="780"/>
      <source>English (Australia)</source>
      <translation>英语(澳大利亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="782"/>
      <source>English (Bahamas)</source>
      <translation>英语(牙买加)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="783"/>
      <source>English (Botswana)</source>
      <translation>英语 (博茨瓦纳)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="784"/>
      <source>English (Belize)</source>
      <translation>英语(伯利兹)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="726"/>
      <source>Arabic (Egypt)</source>
      <translation>阿拉伯语(埃及)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="480"/>
      <source>&lt;p&gt;Splits the Mudlet screen to show multiple profiles at once; disabled when less than two are loaded.&lt;/p&gt;</source>
      <comment>Same text is used in 2 places.</comment>
      <translation>&lt;p&gt;分割 Mudlet 屏幕以一次显示多个配置文件; 若加载的配置文件小于2个时则禁用此功能。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="492"/>
      <source>Report issue</source>
      <translation>报告问题</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="781"/>
      <source>English (Australia, Large)</source>
      <comment>This dictionary contains larger vocabulary.</comment>
      <translation>英语(澳大利亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="785"/>
      <source>English (Canada)</source>
      <translation>英语(加拿大)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="786"/>
      <source>English (Canada, Large)</source>
      <comment>This dictionary contains larger vocabulary.</comment>
      <translation>英语(澳大利亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="787"/>
      <source>English (Denmark)</source>
      <translation>英语(丹麦)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="788"/>
      <source>English (United Kingdom)</source>
      <translation>英语(英国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="789"/>
      <source>English (United Kingdom, Large)</source>
      <comment>This dictionary contains larger vocabulary.</comment>
      <translation>英语(英国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="790"/>
      <source>English (United Kingdom - &apos;ise&apos; not &apos;ize&apos;)</source>
      <comment>This dictionary prefers the British &apos;ise&apos; form over the American &apos;ize&apos; one.</comment>
      <translation>英语（英国）——使用&apos;ise&apos;而非&apos;ize&apos;。</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="791"/>
      <source>English (Ghana)</source>
      <translation>英语(加纳)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="792"/>
      <source>English (Hong Kong SAR China)</source>
      <translation>英语 (中国香港特别行政区)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="793"/>
      <source>English (Ireland)</source>
      <translation>英语(爱尔兰)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="794"/>
      <source>English (India)</source>
      <translation>英语(印度)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="795"/>
      <source>English (Jamaica)</source>
      <translation>英语(牙买加)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="796"/>
      <source>English (Namibia)</source>
      <translation>英语(纳米比亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="797"/>
      <source>English (Nigeria)</source>
      <translation>英语(尼日利亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="798"/>
      <source>English (New Zealand)</source>
      <translation>英语(新西兰)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="799"/>
      <source>English (Philippines)</source>
      <translation>英语(菲律宾)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="800"/>
      <source>English (Singapore)</source>
      <translation>英语(新加坡)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="801"/>
      <source>English (Trinidad/Tobago)</source>
      <translation>英语 (特立尼达/多巴哥)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="802"/>
      <source>English (United States)</source>
      <translation>英语(美国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="803"/>
      <source>English (United States, Large)</source>
      <comment>This dictionary contains larger vocabulary.</comment>
      <translation>英语(美国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="804"/>
      <source>English (South Africa)</source>
      <translation>英语(南非)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="805"/>
      <source>English (Zimbabwe)</source>
      <translation>英语(津巴布韦)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="806"/>
      <source>Spanish</source>
      <translation>西班牙文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="807"/>
      <source>Spanish (Argentina)</source>
      <translation>西班牙语(阿根廷)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="808"/>
      <source>Spanish (Bolivia)</source>
      <translation>西班牙语(玻利维亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="809"/>
      <source>Spanish (Chile)</source>
      <translation>西班牙语(智利)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="810"/>
      <source>Spanish (Colombia)</source>
      <translation>西班牙语(哥伦比亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="811"/>
      <source>Spanish (Costa Rica)</source>
      <translation>西班牙语(哥斯达黎加)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="812"/>
      <source>Spanish (Cuba)</source>
      <translation>西班牙语(智利)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="813"/>
      <source>Spanish (Dominican Republic)</source>
      <translation>西班牙语(多米尼加共和国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="814"/>
      <source>Spanish (Ecuador)</source>
      <translation>西班牙语(厄瓜多尔)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="815"/>
      <source>Spanish (Spain)</source>
      <translation>西班牙语 (西班牙)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="816"/>
      <source>Spanish (Guatemala)</source>
      <translation>西班牙语(危地马拉)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="817"/>
      <source>Spanish (Honduras)</source>
      <translation>西班牙语(洪都拉斯)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="818"/>
      <source>Spanish (Mexico)</source>
      <translation>西班牙语(墨西哥)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="819"/>
      <source>Spanish (Nicaragua)</source>
      <translation>西班牙语(尼加拉瓜)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="820"/>
      <source>Spanish (Panama)</source>
      <translation>西班牙语(巴拿马)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="821"/>
      <source>Spanish (Peru)</source>
      <translation>西班牙(秘鲁)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="822"/>
      <source>Spanish (Puerto Rico)</source>
      <translation>西班牙语(波多黎各)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="823"/>
      <source>Spanish (Paraguay)</source>
      <translation>西班牙语(巴拉圭)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="824"/>
      <source>Spanish (El Savador)</source>
      <translation>西班牙语(圣萨尔瓦多)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="825"/>
      <source>Spanish (United States)</source>
      <translation>西班牙语(美国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="826"/>
      <source>Spanish (Uruguay)</source>
      <translation>西班牙语(乌拉圭)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="827"/>
      <source>Spanish (Venezuela)</source>
      <translation>西班牙语(委内瑞拉)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="828"/>
      <source>Estonian</source>
      <translation>爱沙尼亚语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="829"/>
      <source>Estonian (Estonia)</source>
      <translation>爱沙尼亚语(爱沙尼亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="830"/>
      <source>Basque</source>
      <translation>巴斯克语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="831"/>
      <source>Basque (Spain)</source>
      <translation>巴斯克语(西班牙)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="832"/>
      <source>Basque (France)</source>
      <translation>巴斯克(法国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="833"/>
      <source>French</source>
      <translation>法文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="834"/>
      <source>French (Belgium)</source>
      <translation>法语(比利时)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="835"/>
      <source>French (Catalan)</source>
      <translation>法语(加泰罗尼亚语)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="836"/>
      <source>French (Switzerland)</source>
      <translation>法语(瑞士)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="837"/>
      <source>French (France)</source>
      <translation>法语(法国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="838"/>
      <source>French (Luxemburg)</source>
      <translation>法语(卢森堡)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="839"/>
      <source>French (Monaco)</source>
      <translation>法语(摩纳哥)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="840"/>
      <source>Gaelic</source>
      <translation>盖尔语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="841"/>
      <source>Gaelic (United Kingdom {Scots})</source>
      <translation>盖尔语(United Kingdom {Scots})</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="842"/>
      <source>Galician</source>
      <translation>加利西亚语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="843"/>
      <source>Galician (Spain)</source>
      <translation>加利西亚(西班牙)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="844"/>
      <source>Gujarati</source>
      <translation>古吉拉特语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="845"/>
      <source>Gujarati (India)</source>
      <translation>古吉拉特语(印度)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="846"/>
      <source>Hebrew</source>
      <translation>希伯来语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="847"/>
      <source>Hebrew (Israel)</source>
      <translation>希伯来语(以色列)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="848"/>
      <source>Hindi</source>
      <translation>北印度语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="849"/>
      <source>Hindi (India)</source>
      <translation>印地语(印度)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="850"/>
      <source>Croatian</source>
      <translation>克罗地亚语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="851"/>
      <source>Croatian (Croatia)</source>
      <translation>克罗地亚语(克罗地亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="852"/>
      <source>Hungarian</source>
      <translation>匈牙利文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="853"/>
      <source>Hungarian (Hungary)</source>
      <translation>匈牙利语(匈牙利)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="854"/>
      <source>Armenian</source>
      <translation>亚美尼亚语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="855"/>
      <source>Armenian (Armenia)</source>
      <translation>亚美尼亚语(亚美尼亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="856"/>
      <source>Interlingue</source>
      <comment>formerly known as Occidental, and not to be mistaken for Interlingua</comment>
      <translation>国际语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="857"/>
      <source>Icelandic</source>
      <translation>冰岛语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="858"/>
      <source>Icelandic (Iceland)</source>
      <translation>冰岛语(冰岛)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="859"/>
      <source>Italian</source>
      <translation>意大利文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="860"/>
      <source>Italian (Switzerland)</source>
      <translation>意大利语(瑞士)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="861"/>
      <source>Italian (Italy)</source>
      <translation>意大利语(意大利)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="862"/>
      <source>Kazakh</source>
      <translation>哈萨克语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="863"/>
      <source>Kazakh (Kazakhstan)</source>
      <translation>哈萨克语(哈萨克斯坦)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="864"/>
      <source>Kurmanji</source>
      <translation>库尔曼吉</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="865"/>
      <source>Kurmanji {Latin-alphabet Kurdish}</source>
      <translation>库尔曼吉 {Latin-alphabet Kurdish}</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="866"/>
      <source>Korean</source>
      <translation>韩语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="867"/>
      <source>Korean (South Korea)</source>
      <translation>韩语(韩国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="868"/>
      <source>Kurdish</source>
      <translation>库尔德语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="869"/>
      <source>Kurdish (Syria)</source>
      <translation>库尔德人(叙利亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="870"/>
      <source>Kurdish (Turkey)</source>
      <translation>土耳其语(土耳其)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="871"/>
      <source>Lao</source>
      <translation>老挝语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="872"/>
      <source>Lao (Laos)</source>
      <translation>老挝(老挝)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="873"/>
      <source>Lithuanian</source>
      <translation>立陶宛语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="874"/>
      <source>Lithuanian (Lithuania)</source>
      <translation>立陶宛语(立陶宛)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="875"/>
      <source>Malayalam</source>
      <translation>马拉雅拉姆语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="876"/>
      <source>Malayalam (India)</source>
      <translation>马拉雅拉姆语(印度)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="877"/>
      <source>Norwegian Bokmål</source>
      <translation>挪威语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="878"/>
      <source>Norwegian Bokmål (Norway)</source>
      <translation>书面挪威语(挪威)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="879"/>
      <source>Nepali</source>
      <translation>尼泊尔语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="880"/>
      <source>Nepali (Nepal)</source>
      <translation>尼泊尔语(尼泊尔)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="881"/>
      <source>Dutch</source>
      <translation>荷兰文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="882"/>
      <source>Dutch (Netherlands Antilles)</source>
      <translation>荷兰语(荷属安的列斯群岛)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="883"/>
      <source>Dutch (Aruba)</source>
      <translation>荷兰语(阿鲁巴)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="884"/>
      <source>Dutch (Belgium)</source>
      <translation>荷兰语(比利时)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="885"/>
      <source>Dutch (Netherlands)</source>
      <translation>荷兰语(荷兰)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="886"/>
      <source>Dutch (Suriname)</source>
      <translation>荷兰语 (苏里南)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="887"/>
      <source>Norwegian Nynorsk</source>
      <translation>挪威尼诺斯克语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="888"/>
      <source>Norwegian Nynorsk (Norway)</source>
      <translation>新挪威语(挪威)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="889"/>
      <source>Occitan</source>
      <translation>奥克西坦语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="890"/>
      <source>Occitan (France)</source>
      <translation>奥克西坦语(法国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="891"/>
      <source>Polish</source>
      <translation>波兰文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="892"/>
      <source>Polish (Poland)</source>
      <translation>波兰语(波兰)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="893"/>
      <source>Portuguese</source>
      <translation>葡萄牙文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="894"/>
      <source>Portuguese (Brazil)</source>
      <translation>Português (Brazil)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="895"/>
      <source>Portuguese (Portugal)</source>
      <translation>葡萄牙语(葡萄牙)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="896"/>
      <source>Romanian</source>
      <translation>罗马尼亚文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="897"/>
      <source>Romanian (Romania)</source>
      <translation>罗马尼亚语(罗马尼亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="898"/>
      <source>Russian</source>
      <translation>俄文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="899"/>
      <source>Russian (Russia)</source>
      <translation>俄语(俄罗斯)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="900"/>
      <source>Northern Sami</source>
      <translation>北萨摩斯语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="901"/>
      <source>Northern Sami (Finland)</source>
      <translation>北萨米语(芬兰)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="902"/>
      <source>Northern Sami (Norway)</source>
      <translation>北萨米语(挪威)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="903"/>
      <source>Northern Sami (Sweden)</source>
      <translation>北萨米语(芬兰)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="904"/>
      <source>Shtokavian</source>
      <comment>This code seems to be the identifier for the prestige dialect for several languages used in the region of the former Yugoslavia state without a state indication</comment>
      <translation>波斯尼亚文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="905"/>
      <source>Shtokavian (former state of Yugoslavia)</source>
      <comment>This code seems to be the identifier for the prestige dialect for several languages used in the region of the former Yugoslavia state with a (withdrawn from ISO 3166) state indication</comment>
      <translation>波斯尼亚文（南斯拉夫）</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="906"/>
      <source>Sinhala</source>
      <translation>僧伽罗文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="907"/>
      <source>Sinhala (Sri Lanka)</source>
      <translation>僧伽罗语(斯里兰卡)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="908"/>
      <source>Slovak</source>
      <translation>斯洛伐克文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="909"/>
      <source>Slovak (Slovakia)</source>
      <translation>斯洛伐克语(斯洛伐克)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="910"/>
      <source>Slovenian</source>
      <translation>斯洛文尼亚语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="911"/>
      <source>Slovenian (Slovenia)</source>
      <translation>斯洛文尼亚语(斯洛文尼亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="912"/>
      <source>Somali</source>
      <translation>索马里语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="913"/>
      <source>Somali (Somalia)</source>
      <translation>索马里 (索马里)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="914"/>
      <source>Albanian</source>
      <translation>阿尔巴尼亚语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="915"/>
      <source>Albanian (Albania)</source>
      <translation>阿尔巴尼亚语(阿尔巴尼亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="916"/>
      <source>Serbian</source>
      <translation>塞尔维亚语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="917"/>
      <source>Serbian (Montenegro)</source>
      <translation>塞尔维亚语 (黑山)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="918"/>
      <source>Serbian (Serbia)</source>
      <translation>塞尔维亚 (塞尔维亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="919"/>
      <source>Serbian (Serbia - Latin-alphabet)</source>
      <translation>塞尔维亚语 (塞尔维亚-拉丁字母)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="920"/>
      <source>Serbian (former state of Yugoslavia)</source>
      <translation>塞尔维亚 (前南斯拉夫)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="921"/>
      <source>Swati</source>
      <translation>斯瓦特语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="922"/>
      <source>Swati (Swaziland)</source>
      <translation>斯瓦蒂 (斯威士兰)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="923"/>
      <source>Swati (South Africa)</source>
      <translation>南非荷兰语(南非)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="924"/>
      <source>Swedish</source>
      <translation>瑞典语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="925"/>
      <source>Swedish (Sweden)</source>
      <translation>瑞典语(瑞典)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="926"/>
      <source>Swedish (Finland)</source>
      <translation>瑞典语(芬兰)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="927"/>
      <source>Swahili</source>
      <translation>斯瓦希里语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="928"/>
      <source>Swahili (Kenya)</source>
      <translation>斯瓦希里语(肯尼亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="929"/>
      <source>Swahili (Tanzania)</source>
      <translation>斯瓦希里语 (坦桑尼亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="930"/>
      <source>Turkish</source>
      <translation>土耳其语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="931"/>
      <source>Telugu</source>
      <translation>泰卢固语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="932"/>
      <source>Telugu (India)</source>
      <translation>泰卢固语(印度)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="933"/>
      <source>Thai</source>
      <translation>泰语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="934"/>
      <source>Thai (Thailand)</source>
      <translation>泰国语(泰国)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="935"/>
      <source>Tigrinya</source>
      <translation>提格利尼亚语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="936"/>
      <source>Tigrinya (Eritrea)</source>
      <translation>提格里尼亚(厄立特里亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="937"/>
      <source>Tigrinya (Ethiopia)</source>
      <translation>提格里尼亚(厄立特里亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="938"/>
      <source>Turkmen</source>
      <translation>土库曼语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="939"/>
      <source>Turkmen (Turkmenistan)</source>
      <translation>土库曼语(土库曼斯坦)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="940"/>
      <source>Tswana</source>
      <translation>茨瓦纳文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="941"/>
      <source>Tswana (Botswana)</source>
      <translation>茨瓦纳(博茨瓦纳)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="942"/>
      <source>Tswana (South Africa)</source>
      <translation>南非荷兰语(南非)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="943"/>
      <source>Tsonga</source>
      <translation>宗加文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="944"/>
      <source>Tsonga (South Africa)</source>
      <translation>南非荷兰语(南非)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="945"/>
      <source>Ukrainian</source>
      <translation>乌克兰语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="946"/>
      <source>Ukrainian (Ukraine)</source>
      <translation>乌克兰语(乌克兰)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="947"/>
      <source>Uzbek</source>
      <translation>乌兹别克文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="948"/>
      <source>Uzbek (Uzbekistan)</source>
      <translation>乌兹别克(乌兹别克斯坦)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="949"/>
      <source>Venda</source>
      <translation>文达语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="950"/>
      <source>Vietnamese</source>
      <translation>越南语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="951"/>
      <source>Vietnamese (Vietnam)</source>
      <translation>越南语(越南)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="952"/>
      <source>Vietnamese (DauCu varient - old-style diacritics)</source>
      <translation>越南语(DauCu varient -旧式变语)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="953"/>
      <source>Vietnamese (DauMoi varient - new-style diacritics)</source>
      <translation>越南语(DauCu varient -旧式变语)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="954"/>
      <source>Walloon</source>
      <translation>瓦隆语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="955"/>
      <source>Xhosa</source>
      <translation>科萨语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="956"/>
      <source>Yiddish</source>
      <translation>依地语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="957"/>
      <source>Chinese</source>
      <translation>中文</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="958"/>
      <source>Chinese (China - simplified)</source>
      <translation>中文(简体中文)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="959"/>
      <source>Chinese (Taiwan - traditional)</source>
      <translation>中文（繁体）</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="960"/>
      <source>Zulu</source>
      <translation>祖鲁语</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="4322"/>
      <source>Hide tray icon</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="4327"/>
      <source>Quit Mudlet</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="235"/>
      <source>hh:mm:ss</source>
      <comment>Formatting string for elapsed time display in replay playback - see QDateTime::toString(const QString&amp;) for the gory details...!</comment>
      <translation>hh:mm:ss</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="287"/>
      <source>Main Toolbar</source>
      <translation>主工具栏</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="330"/>
      <location filename="../src/mudlet.cpp" line="337"/>
      <location filename="../src/mudlet.cpp" line="339"/>
      <source>Connect</source>
      <translation>连接</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="342"/>
      <source>Disconnect</source>
      <translation>断开连接</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="401"/>
      <source>Open Discord</source>
      <translation>打开Discord</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="406"/>
      <source>Open IRC</source>
      <translation>打开 IRC</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="458"/>
      <source>Package Exporter</source>
      <translation>包导出器</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="349"/>
      <source>Triggers</source>
      <translation>触发器</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="350"/>
      <source>Show and edit triggers</source>
      <translation>显示并编辑触发器</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="357"/>
      <source>Aliases</source>
      <translation>别名</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="358"/>
      <source>Show and edit aliases</source>
      <translation>显示并编辑别名</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="363"/>
      <source>Timers</source>
      <translation>定时器</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="364"/>
      <source>Show and edit timers</source>
      <translation>显示并编辑定时器</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="369"/>
      <source>Buttons</source>
      <translation>按钮</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="370"/>
      <source>Show and edit easy buttons</source>
      <translation>显示和编辑快捷按钮</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="375"/>
      <source>Scripts</source>
      <translation>脚本</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="376"/>
      <source>Show and edit scripts</source>
      <translation>显示并编辑脚本</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="381"/>
      <source>Keys</source>
      <translation>按键</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="382"/>
      <source>Show and edit keys</source>
      <translation>显示并编辑按键</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="387"/>
      <source>Variables</source>
      <translation>变量</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="388"/>
      <source>Show and edit Lua variables</source>
      <translation>显示并编辑 Lua 变量</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="414"/>
      <source>Map</source>
      <translation>地图</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="415"/>
      <source>Show/hide the map</source>
      <translation>显示/隐藏地图</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="420"/>
      <source>Manual</source>
      <translation>手册</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="421"/>
      <source>Browse reference material and documentation</source>
      <translation>浏览参考资料和文档</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="426"/>
      <source>Settings</source>
      <translation>设置</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="427"/>
      <source>See and edit profile preferences</source>
      <translation>查看并编辑配置文件首选项</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="435"/>
      <source>Notepad</source>
      <translation>记事本</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="436"/>
      <source>Open a notepad that you can store your notes in</source>
      <translation>打开记事本保存笔记</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="442"/>
      <location filename="../src/mudlet.cpp" line="449"/>
      <location filename="../src/mudlet.cpp" line="451"/>
      <source>Package Manager</source>
      <translation>包管理器</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="454"/>
      <source>Module Manager</source>
      <translation>模块管理器</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="468"/>
      <source>Replay</source>
      <translation>回放</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="473"/>
      <source>Reconnect</source>
      <translation>重新连接</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="474"/>
      <source>Disconnects you from the game and connects once again</source>
      <translation>从游戏中断开，然后再连接一次</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="479"/>
      <source>MultiView</source>
      <translation>多视图</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="503"/>
      <location filename="../src/mudlet.cpp" line="3445"/>
      <source>About</source>
      <translation>关于</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="504"/>
      <location filename="../src/mudlet.cpp" line="3428"/>
      <source>&lt;p&gt;Inform yourself about this version of Mudlet, the people who made it and the licence under which you can share it.&lt;/p&gt;</source>
      <comment>Tooltip for About Mudlet sub-menu item and main toolbar button (or menu item if an update has changed that control to have a popup menu instead) (Used in 3 places - please ensure all have the same translation).</comment>
      <translation>&lt;p&gt;告知你自己Mudlet的版本号、谁创造了它、你在什么协议下可以分享它。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="962"/>
      <source>ASCII (Basic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ASCII(基本)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="963"/>
      <source>UTF-8 (Recommended)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>UTF-8 (推荐)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="968"/>
      <source>ISO 8859-1 (Western European)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-1 (西欧)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="969"/>
      <source>ISO 8859-2 (Central European)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-2 (Central European)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="970"/>
      <source>ISO 8859-3 (South European)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-3 (South European)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="971"/>
      <source>ISO 8859-4 (Baltic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-4 (Baltic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="972"/>
      <source>ISO 8859-5 (Cyrillic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-5 (Cyrillic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="973"/>
      <source>ISO 8859-6 (Arabic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-6 (Arabic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="974"/>
      <source>ISO 8859-7 (Greek)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-7 (Greek)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="975"/>
      <source>ISO 8859-8 (Hebrew Visual)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-8 (Hebrew Visual)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="976"/>
      <source>ISO 8859-9 (Turkish)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-9 (土耳其)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="977"/>
      <source>ISO 8859-10 (Nordic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-10 (Nordic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="978"/>
      <source>ISO 8859-11 (Latin/Thai)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-11 (Latin/Thai)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="979"/>
      <source>ISO 8859-13 (Baltic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-13 (Baltic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="980"/>
      <source>ISO 8859-14 (Celtic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-14 (Celtic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="981"/>
      <source>ISO 8859-15 (Western)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-15 (Western)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="982"/>
      <source>ISO 8859-16 (Romanian)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-16 (Romanian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="983"/>
      <location filename="../src/mudlet.cpp" line="984"/>
      <source>CP437 (OEM Font)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP437 (OEM字体)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="985"/>
      <location filename="../src/mudlet.cpp" line="986"/>
      <source>CP667 (Mazovia)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP667 (马佐维亚)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="987"/>
      <location filename="../src/mudlet.cpp" line="988"/>
      <source>CP737 (DOS Greek)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP737 ( DOS 希腊语)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="989"/>
      <source>CP850 (Western Europe)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP850 (Western Europe)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="990"/>
      <source>CP866 (Cyrillic/Russian)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP866 (Cyrillic/Russian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="991"/>
      <location filename="../src/mudlet.cpp" line="992"/>
      <source>CP869 (DOS Greek 2)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP869 ( DOS 希腊语 2)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="993"/>
      <source>CP1161 (Latin/Thai)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP1161(拉丁文/泰文)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="994"/>
      <source>KOI8-R (Cyrillic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>KOI8-R (Cyrillic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="995"/>
      <source>KOI8-U (Cyrillic/Ukrainian)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>KOI8-U (Cyrillic/Ukrainian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="996"/>
      <source>MACINTOSH</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>MACINTOSH</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="997"/>
      <source>WINDOWS-1250 (Central European)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1250 (Central European)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="998"/>
      <source>WINDOWS-1251 (Cyrillic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1251 (Cyrillic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="999"/>
      <source>WINDOWS-1252 (Western)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1252 (Western)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1000"/>
      <source>WINDOWS-1253 (Greek)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1253 (Greek)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1001"/>
      <source>WINDOWS-1254 (Turkish)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1254 (Turkish)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1002"/>
      <source>WINDOWS-1255 (Hebrew)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1258 (希伯来)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1003"/>
      <source>WINDOWS-1256 (Arabic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1256 (Arabic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1004"/>
      <source>WINDOWS-1257 (Baltic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1257 (Baltic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1005"/>
      <source>WINDOWS-1258 (Vietnamese)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1258 (越南)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2489"/>
      <source>Central Debug Console</source>
      <translation>中央调试控制台</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="516"/>
      <location filename="../src/mudlet.cpp" line="517"/>
      <source>Toggle Full Screen View</source>
      <translation>切换全屏显示</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="496"/>
      <source>The public test build gets newer features to you quicker, and you help us find issues in them quicker. Spotted something odd? Let us know asap!</source>
      <translation>公共测试版将更新的功能更快地送到你手中，你也能帮助我们更快地发现其中的问题。发现了什么奇怪的东西？请尽快告诉我们</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="964"/>
      <source>GBK (Chinese)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>GBK(中文)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="965"/>
      <source>GB18030 (Chinese)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>GB18030(中文)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="966"/>
      <source>Big5-ETen (Taiwan)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>Big5-ETen(台湾)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="967"/>
      <source>Big5-HKSCS (Hong Kong)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>Big5-HKSCS(香港)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1550"/>
      <source>&lt;p&gt;Load a Mudlet replay.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Disabled until a profile is loaded.&lt;/i&gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1586"/>
      <location filename="../src/mudlet.cpp" line="2860"/>
      <source>&lt;p&gt;Load a Mudlet replay.&lt;/p&gt;</source>
      <translation>&lt;p&gt;载入Mudlet的回放。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2315"/>
      <source>%1 - notes</source>
      <translation>%1 - 笔记</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2368"/>
      <source>Select Replay</source>
      <translation>选择回放</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2370"/>
      <source>*.dat</source>
      <translation>*.dat</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2627"/>
      <source>[  OK  ]  - Profile &quot;%1&quot; loaded in offline mode.</source>
      <translation>[ 完成 ] - 配置文件 &quot;%1&quot; 在脱机模式下加载完成。</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2762"/>
      <source>&lt;p&gt;Cannot load a replay as one is already in progress in this or another profile.&lt;/p&gt;</source>
      <translation>&lt;p&gt;无法加载重播，因为在这个或另一个配置文件中已经在进行重播。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2779"/>
      <source>Faster</source>
      <translation>加快</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2782"/>
      <source>&lt;p&gt;Replay each step with a shorter time interval between steps.&lt;/p&gt;</source>
      <translation>&lt;p&gt;以较短的时间间隔重放每一步。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2786"/>
      <source>Slower</source>
      <translation>减慢</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2789"/>
      <source>&lt;p&gt;Replay each step with a longer time interval between steps.&lt;/p&gt;</source>
      <translation>&lt;p&gt;以较长的时间间隔重放每一步。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2799"/>
      <location filename="../src/mudlet.cpp" line="2868"/>
      <location filename="../src/mudlet.cpp" line="2881"/>
      <source>Speed: X%1</source>
      <translation>速度: %1</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2806"/>
      <location filename="../src/mudlet.cpp" line="2823"/>
      <source>Time: %1</source>
      <translation>时间：%1</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/mudlet.cpp" line="3439"/>
      <source>&lt;p&gt;About Mudlet&lt;/p&gt;&lt;p&gt;&lt;i&gt;%n update(s) is/are now available!&lt;/i&gt;&lt;p&gt;</source>
      <comment>This is the tooltip text for the &apos;About&apos; Mudlet main toolbar button when it has been changed by adding a menu which now contains the original &apos;About Mudlet&apos; action and a new one to access the manual update process</comment>
      <translation>
        <numerusform>&lt;p&gt;关于Mudlet&lt;/p&gt;&lt;p&gt;&lt;i&gt;%n 已经可以进行更新！&lt;/i&gt;&lt;p&gt;</numerusform>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/mudlet.cpp" line="3457"/>
      <source>Review %n update(s)...</source>
      <comment>Review update(s) menu item, %n is the count of how many updates are available</comment>
      <translation>
        <numerusform>检查 %n 更新...</numerusform>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/mudlet.cpp" line="3462"/>
      <source>&lt;p&gt;Review the update(s) available...&lt;/p&gt;</source>
      <comment>Tool-tip for review update(s) menu item, given that the count of how many updates are available is already shown in the menu, the %n parameter that is that number need not be used here</comment>
      <translation>
        <numerusform>&lt;p&gt;查看可用更新...&lt;/p&gt;</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="3487"/>
      <source>Update installed - restart to apply</source>
      <translation>更新已安装 - 重新启动以应用</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="3523"/>
      <source>[ WARN ]  - Cannot perform replay, another one may already be in progress,
try again when it has finished.</source>
      <translation>[警告] - 不能执行重播, 另一个重播可能已经在进行中，
请等它完成后再次尝试.</translation>
    </message>
  </context>
  <context>
    <name>package_manager</name>
    <message>
      <location filename="../src/ui/package_manager.ui" line="48"/>
      <source>Install</source>
      <translation>安装</translation>
    </message>
    <message>
      <location filename="../src/ui/package_manager.ui" line="61"/>
      <source>Uninstall</source>
      <translation>卸载</translation>
    </message>
  </context>
  <context>
    <name>package_manager_unpack</name>
    <message>
      <location filename="../src/ui/package_manager_unpack.ui" line="24"/>
      <source>unpacking please wait ...</source>
      <translation>正在解压，请稍候...</translation>
    </message>
  </context>
  <context>
    <name>profile_preferences</name>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="20"/>
      <source>Profile preferences</source>
      <translation>配置设定</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="55"/>
      <source>General</source>
      <translation>一般</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="61"/>
      <source>Icon sizes</source>
      <translation>图标尺寸</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="67"/>
      <source>Icon size toolbars:</source>
      <translation>工具栏上的图标尺寸：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="90"/>
      <source>Icon size in tree views:</source>
      <translation>树状视图的图标尺寸：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="110"/>
      <source>Show menu bar:</source>
      <translation>显示菜单栏：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="121"/>
      <location filename="../src/ui/profile_preferences.ui" line="150"/>
      <source>Never</source>
      <translation>从不</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="126"/>
      <location filename="../src/ui/profile_preferences.ui" line="155"/>
      <source>Until a profile is loaded</source>
      <translation>直到载入配置</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="131"/>
      <location filename="../src/ui/profile_preferences.ui" line="160"/>
      <source>Always</source>
      <translation>始终</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="139"/>
      <source>Show main toolbar</source>
      <translation>显示主工具栏</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="239"/>
      <source>Allow server to install script packages</source>
      <translation>允许服务器安装脚本包</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="266"/>
      <source>Game protocols</source>
      <translation>游戏协议</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="323"/>
      <location filename="../src/ui/profile_preferences.ui" line="3306"/>
      <source>Please reconnect to your game for the change to take effect</source>
      <translation>请重新连接到您的游戏，以使更改生效</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="339"/>
      <source>Log options</source>
      <translation>日志选项</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="348"/>
      <source>Save log files in HTML format instead of plain text</source>
      <translation>用HTML格式来代替纯文本保存日志文件</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="355"/>
      <source>Add timestamps at the beginning of log lines</source>
      <translation>在日志行开头添加日期戳</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="362"/>
      <source>Save log files in:</source>
      <translation>保存日志文件到：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="379"/>
      <source>Browse...</source>
      <translation>浏览...</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="386"/>
      <source>Reset</source>
      <translation>重置</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="393"/>
      <source>Log format:</source>
      <translation>日志格式：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="406"/>
      <source>Log name:</source>
      <translation>日志名:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="426"/>
      <source>.txt</source>
      <translation>.txt</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="459"/>
      <source>Input line</source>
      <translation>输入行</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="468"/>
      <source>Input</source>
      <translation>输入</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="474"/>
      <source>use strict UNIX line endings on commands for old UNIX servers that can&apos;t handle windows line endings correctly</source>
      <translation>在命令中使用精确的UNIX行尾来适应老式UNIX服务器，这将不能&apos;正确地处理Windows行尾。</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="477"/>
      <source>Strict UNIX line endings</source>
      <translation>精确的UNIX行尾</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="494"/>
      <source>Show the text you sent</source>
      <translation>显示你送出的文本</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="484"/>
      <source>Auto clear the input line after you sent text</source>
      <translation>在你送出文本后自动清空输入行</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="201"/>
      <source>&lt;p&gt;If you are playing a non-English game and seeing � instead of text, or special letters like &lt;span style=&quot; font-weight:600;&quot;&gt;ñ&lt;/span&gt; aren&apos;t showing right - try changing the encoding to UTF-8 or to one suggested by your game.&lt;/p&gt;&lt;p&gt;For some encodings on some Operating Systems Mudlet itself has to provide the codec needed; if that is the case for this Mudlet then there will be a &lt;tt&gt;m &lt;/tt&gt; prefixed applied to those encoding names (so if they have errors the blame can be applied correctly!)&lt;/p&gt;</source>
      <translation>&lt;p&gt;若你正在游玩非英语游戏，本应出现正常文本的地方出现了�，或是像&lt;span style=&quot; font-weight:600;&quot;&gt;ñ&lt;/span&gt;之类的特殊字符，你应该尝试将文本编码切换成UTF-8或你的游戏推荐的编码。&lt;/p&gt;&lt;p&gt;在某些操作系统上，Mudlet不得不使用自带的编码解码器。在这种情况下，对应的编码名称前将有&lt;tt&gt;m &lt;/tt&gt;的前缀。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="302"/>
      <source>&lt;p&gt;Enables MSP - provides Mud Sound Protocol messages during game play for supported games&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="345"/>
      <source>&lt;p&gt;When checked will cause the date-stamp named log file to be HTML (file extension &apos;.html&apos;) which can convey color, font and other formatting information rather than a plain text (file extension &apos;.txt&apos;) format.  If changed while logging is already in progress it is necessary to stop and restart logging for this setting to take effect in a new log file.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="514"/>
      <source>React to all keybindings on the same key</source>
      <translation>响应同一键上的所有键绑定</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="524"/>
      <source>Command separator:</source>
      <translation>命令分隔符:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="534"/>
      <source>Enter text to separate commands with or leave blank to disable</source>
      <translation>输入要分隔的命令的文本，或将其留空以禁用</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="541"/>
      <source>Command line minimum height in pixels:</source>
      <translation>命令行最小高度像素：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="663"/>
      <source>Main display</source>
      <translation>主要显示</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="675"/>
      <source>Font</source>
      <translation>字体</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="681"/>
      <source>Font:</source>
      <translation>字体：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="704"/>
      <source>Size:</source>
      <translation>大小：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="726"/>
      <source>Use anti aliasing on fonts. Smoothes fonts if you have a high screen resolution and you can use larger fonts. Note that on low resolutions and small font sizes, the font gets blurry. </source>
      <translation>在字体上使用抗锯齿。要是你使用的是高分辨率且是大字体时，可以用来平滑字体。注意用在低分辨率和小字号上的话，字体会变得模糊。 </translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="729"/>
      <source>Enable anti-aliasing</source>
      <translation>启用抗锯齿</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="758"/>
      <source>Display Border</source>
      <translation>显示的边框</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="779"/>
      <source>Top border height:</source>
      <translation>顶部边框高度：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="823"/>
      <source>Left border width:</source>
      <translation>左边边框宽度：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="867"/>
      <source>Bottom border height:</source>
      <translation>底部边框高度：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="911"/>
      <source>Right border width:</source>
      <translation>右边边框宽度：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="952"/>
      <source>Word wrapping</source>
      <translation>自动换行</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="976"/>
      <source>Wrap lines at:</source>
      <translation>换行于：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="996"/>
      <location filename="../src/ui/profile_preferences.ui" line="1044"/>
      <source>characters</source>
      <translation>字符</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1024"/>
      <source>Indent wrapped lines by:</source>
      <translation>缩进换行于：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1057"/>
      <source>Double-click</source>
      <translation>双击</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1063"/>
      <source>Stop selecting a word on these characters:</source>
      <translation>在以下字符处停止选中单词：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1073"/>
      <source>&apos;&quot;</source>
      <translation>&apos;&quot;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1086"/>
      <source>Display options</source>
      <translation>显示选项</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1095"/>
      <source>Fix unnecessary linebreaks on GA servers</source>
      <translation>修复GA服务器上非必要的换行符</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1105"/>
      <source>Show Spaces/Tabs</source>
      <translation>显示空格/制表符</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1115"/>
      <source>Use Mudlet on a netbook with a small screen</source>
      <translation>在小屏幕的上网本中使用Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1125"/>
      <source>Show Line/Paragraphs</source>
      <translation>显示行/段落</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1135"/>
      <source>Echo Lua errors to the main console</source>
      <translation>回显Lua错误到主控制台</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1142"/>
      <source>Make &apos;Ambiguous&apos; E. Asian width characters wide</source>
      <translation>设置&apos;模糊的&apos;亚洲字符的宽度</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1176"/>
      <source>Editor</source>
      <translation>编辑器</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1182"/>
      <source>Theme</source>
      <translation>主题</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1252"/>
      <source>Updating themes from colorsublime.github.io...</source>
      <translation>从colorsublime.github.io更新主题……</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1292"/>
      <source>Color view</source>
      <translation>颜色视图</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1298"/>
      <source>Select your color preferences</source>
      <translation>选择你的颜色偏好</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1304"/>
      <source>Foreground:</source>
      <translation>前景：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1327"/>
      <source>Background:</source>
      <translation>背景：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1347"/>
      <source>Command line foreground:</source>
      <translation>命令行前景：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1364"/>
      <source>Command line background:</source>
      <translation>命令行背景：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1381"/>
      <source>Command foreground:</source>
      <translation>命令前景：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1401"/>
      <source>Command background:</source>
      <translation>命令背景：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="272"/>
      <source>&lt;p&gt;Enables GMCP - note that if you have MSDP enabled as well, some servers will prefer one over the other&lt;/p&gt;</source>
      <translation>&lt;p&gt;启用GMCP——注意如果你也启用了MSDP，一些服务器会用它喜欢的那种覆盖另一种&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="292"/>
      <source>&lt;p&gt;Enables MSDP - note that if you have GMCP enabled as well, some servers will prefer one over the other&lt;/p&gt;</source>
      <translation>&lt;p&gt;启用MSDP——注意如果你也启用了GMCP，一些服务器会用它喜欢的那种覆盖另一种&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="171"/>
      <source>Language &amp;&amp; data encoding</source>
      <translation>文字 &amp;&amp; 数据编码</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="177"/>
      <source>Interface language:</source>
      <translation>界面文字：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="191"/>
      <source>Server data encoding:</source>
      <translation>服务器数据编码格式：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="213"/>
      <source>Please restart Mudlet to apply the new language</source>
      <translation>请重新启动 Mudlet 以应用新语言</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="223"/>
      <source>Miscellaneous</source>
      <translation>其他</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="275"/>
      <source>Enable GMCP  (Generic Mud Communication Protocol)</source>
      <translation>启用 GMCP (通用 Mud 通信协议)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="295"/>
      <source>Enable MSDP  (Mud Server Data Protocol)</source>
      <translation>启用 MSDP (Mud 服务器数据协议)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="282"/>
      <source>&lt;p&gt;Enables MSSP - provides Mud Server Status Protocol information upon connection for supported games&lt;/p&gt;</source>
      <translation>&lt;p&gt;启用 MSSP - 在支持的游戏连接时提供 Mud 服务器状态协议信息&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="285"/>
      <source>Enable MSSP  (Mud Server Status Protocol)</source>
      <translation>启用 MSSP (Mud Server 状态协议)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="491"/>
      <source>&lt;p&gt;Echo the text you send in the display box.&lt;/p&gt;&lt;p&gt;&lt;i&gt;This can be disabled by the game server if it negotiates to use the telnet ECHO option&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;在显示窗口回显你送出的文本。&lt;/p&gt;&lt;p&gt;&lt;i&gt;如果游戏服务器协议使用了 telnet ECHO ，则此功能可能会失效。&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="511"/>
      <source>&lt;p&gt;Check all Key-bindings against key-presses.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Versions of Mudlet prior to &lt;b&gt;3.9.0&lt;/b&gt; would stop checking after the first matching combination of&lt;/i&gt; KeyCode &lt;i&gt;and&lt;/i&gt; KeyModifier &lt;i&gt;was found and then send the command and/or run the script of that Key-binding only.  This&lt;/i&gt; per-profile &lt;i&gt;option tells Mudlet to check and run the remaining matches; but, to retain compatibility with previous versions, defaults to the &lt;b&gt;un&lt;/b&gt;-checked state.&lt;/i&gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="567"/>
      <source>Spell checking</source>
      <translation>拼写检查</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="573"/>
      <source>&lt;p&gt;This option controls spell-checking on the command line in the main console for this profile.&lt;/p&gt;</source>
      <translation>&lt;p&gt;本选项管理的是本配置中在主窗口命令行的拼写检查。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="576"/>
      <source>System/Mudlet dictionary:</source>
      <translation>系统/Mudlet 字典:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="583"/>
      <source>&lt;p&gt;Select one dictionary which will be available on the command line and in the lua sub-system.&lt;/p&gt;</source>
      <translation>&lt;p&gt;选择一个字典，该字典将在命令行和 lua 子系统中可用。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="611"/>
      <source>User dictionary:</source>
      <translation>用户词典：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="617"/>
      <source>&lt;p&gt;A user dictionary specific to this profile will be available. This will be on the command line (words which are in it will appear with a dashed cyan underline) and in the lua sub-system.&lt;/p&gt;</source>
      <translation>&lt;p&gt;可以使用针对本配置的用户词典。这将用在命令行（里面的单词会显示为带有青色虚线的下划线）和Lua分系统中。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="620"/>
      <source>Profile</source>
      <translation>单个配置</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="627"/>
      <source>&lt;p&gt;A user dictionary that is shared between all profiles (which have this option selected) will be available. This will be on the command line (words which are in it will appear with a dashed cyan underline) and in the lua sub-system.&lt;/p&gt;</source>
      <translation>&lt;p&gt;可用于在所有配置中共享的用户词典（要选择此项）。这将用在命令行（里面的单词将会显示为带有青色虚线的下划线）和Lua分系统中。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="630"/>
      <source>Shared</source>
      <translation>共享的</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="719"/>
      <source>The selected font doesn&apos;t work with Mudlet, please pick another</source>
      <translation>所选字体无法在 Mudlet 里使用，请选择另一个字体</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="776"/>
      <location filename="../src/ui/profile_preferences.ui" line="792"/>
      <source>&lt;p&gt;Extra space to have before text on top - can be set to negative to move text up beyond the screen&lt;/p&gt;</source>
      <translation>&lt;p&gt;顶部文本之前额外的空间——可以设置为负数来将文本向上移出屏幕&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="820"/>
      <location filename="../src/ui/profile_preferences.ui" line="836"/>
      <source>&lt;p&gt;Extra space to have before text on the left - can be set to negative to move text left beyond the screen&lt;/p&gt;</source>
      <translation>&lt;p&gt;左边文本之前额外的空间——可以设置为负数来将文本向左移出屏幕&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="864"/>
      <location filename="../src/ui/profile_preferences.ui" line="880"/>
      <source>&lt;p&gt;Extra space to have before text on the bottom - can be set to negative to allow text to go down beyond the screen&lt;/p&gt;</source>
      <translation>&lt;p&gt;底部文本之前额外的空间——可以设置为负数来将文本向下移出屏幕&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="908"/>
      <location filename="../src/ui/profile_preferences.ui" line="924"/>
      <source>&lt;p&gt;Extra space to have before text on the right - can be set to negative to move text right beyond the screen&lt;/p&gt;</source>
      <translation>&lt;p&gt;右边文本之前额外的空间——可以设置为负数来将文本向右移出屏幕&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1070"/>
      <source>&lt;p&gt;Enter the characters you&apos;d like double-clicking to stop selecting text on here. If you don&apos;t enter any, double-clicking on a word will only stop at a space, and will include characters like a double or a single quote. For example, double-clicking on the word &lt;span style=&quot; font-style:italic;&quot;&gt;Hello&lt;/span&gt; in the following will select &lt;span style=&quot; font-style:italic;&quot;&gt;&amp;quot;&lt;/span&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Hello!&amp;quot;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;You say, &lt;span style=&quot; font-weight:600;&quot;&gt;&amp;quot;Hello!&amp;quot;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;If you set the characters in the field to &lt;span style=&quot; font-weight:600;&quot;&gt;&apos;&amp;quot;! &lt;/span&gt;which will mean it should stop selecting on &apos; &lt;span style=&quot; font-style:italic;&quot;&gt;or&lt;/span&gt; &amp;quot; &lt;span style=&quot; font-style:italic;&quot;&gt;or&lt;/span&gt; ! then double-clicking on &lt;span style=&quot; font-style:italic;&quot;&gt;Hello&lt;/span&gt; will just select &lt;span style=&quot; font-style:italic;&quot;&gt;Hello&lt;/span&gt;&lt;/p&gt;&lt;p&gt;You say, &amp;quot;&lt;span style=&quot; font-weight:600;&quot;&gt;Hello&lt;/span&gt;!&amp;quot;&lt;/p&gt;</source>
      <translation>&lt;p&gt;在此处输入你&apos;想要双击时停止选择文本的字符。如果你啥也&apos;不输入，在单词上双击将只会在空格处停止，这将会包括进象是单双引号的字符。比如，在下面的单词&lt;span style=&quot; font-style:italic;&quot;&gt;Hello&lt;/span&gt;上双击，将会选中&lt;span style=&quot; font-style:italic;&quot;&gt;&amp;“&lt;/span&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Hello!&amp;”&lt;/span&gt;&lt;/p&gt;&lt;p&gt;你说道，&lt;span style=&quot; font-weight:600;&quot;&gt;&amp;“Hello!&amp;”&lt;/span&gt;&lt;/p&gt;&lt;p&gt;而如果你在这里设置的字符是&lt;span style=&quot; font-weight:600;&quot;&gt;&apos;&amp;‘“！的话，&lt;/span&gt;这就意味着它会停在选择的&apos;&lt;span style=&quot; font-style:italic;&quot;&gt;'或是&lt;/span&gt;&amp;”&lt;span style=&quot; font-style:italic;&quot;&gt;或是&lt;/span&gt;！处，那么在&lt;span style=&quot; font-style:italic;&quot;&gt;Hello&lt;/span&gt;上双击，将只会选中&lt;span style=&quot; font-style:italic;&quot;&gt;Hello&lt;/span&gt;&lt;/p&gt;&lt;p&gt;你说道，&amp;“&lt;span style=&quot; font-weight:600;&quot;&gt;Hello&lt;/span&gt;！&amp;”&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1076"/>
      <source>(characters to ignore in selection, for example &apos; or &quot;)</source>
      <translation>（在选择中忽略的字符，如，&apos; 或&quot;“）</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1092"/>
      <source>&lt;p&gt;Some games (notably all IRE MUDs) suffer from a bug where they don&apos;t properly communicate with the client on where a newline should be. Enable this to fix text from getting appended to the previous prompt line.&lt;/p&gt;</source>
      <translation>&lt;p&gt;有些游戏（尤其是所有的 IRE MUD）深受不能&apos;在客户端上正确显示换行之处的痛苦。启用此项能修复追加到之前提示行处的文本。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1102"/>
      <source>&lt;body&gt;&lt;p&gt;When displaying Lua contents in the main text editor area of the Editor show tabs and spaces with visible marks instead of whitespace.&lt;/p&gt;</source>
      <translation>&lt;body&gt;&lt;p&gt;当在编辑器的主文本编辑区域显示Lua内容时，用可见的制表符和空格标志来代替空白。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1112"/>
      <source>&lt;p&gt;Select this option for better compatability if you are using a netbook, or some other computer model that has a small screen.&lt;/p&gt;</source>
      <translation>&lt;p&gt;勾选此项可让你在使用上网本或其它较小屏幕的电脑型号时有更好的相容性。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1122"/>
      <source>&lt;body&gt;&lt;p&gt;When displaying Lua contents in the main text editor area of the Editor show  line and paragraphs ends with visible marks as well as whitespace.&lt;/p&gt;</source>
      <translation>&lt;body&gt;&lt;p&gt;当在编辑器的主文本编辑区域显示Lua内容时，用可见的行和段落结束标志来代替空白。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1132"/>
      <source>&lt;p&gt;Prints Lua errors to the main console in addition to the error tab in the editor.&lt;/p&gt;</source>
      <translation>&lt;p&gt;在编辑器中将除了错误的列表符之外的Lua错误输出到主控制台。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1152"/>
      <source>Enable text analyzer</source>
      <translation>启用文本分析</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3473"/>
      <source>h:mm:ss.zzz</source>
      <comment>Used to set a time interval only</comment>
      <translation>h:mm:ss.zzz</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1262"/>
      <source>Autocomplete</source>
      <translation>自动补全</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="229"/>
      <source>Notify on new data</source>
      <translation>新数据时通知</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="232"/>
      <source>&lt;p&gt;Show a toolbar notification if Mudlet is minimized and new data arrives.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="246"/>
      <source>Auto save on exit</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="253"/>
      <source>Allow server to download and play media</source>
      <translation>允许服务器下载和播放媒体</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="256"/>
      <source>&lt;p&gt;This also needs GMCP to be enabled in the next group below.&lt;/p&gt;</source>
      <translation>&lt;p&gt;这也需要在下面的组中启用 GMCP 。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="305"/>
      <source>Enable MSP  (Mud Sound Protocol)</source>
      <translation>启用 MSP (Mud 声音协议)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="501"/>
      <source>Highlights your input line text when scrolling through your history for easy cancellation</source>
      <translation>在滚动浏览历史记录时，突出显示您的输入行文本，以便于取消。</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="504"/>
      <source>Highlight history</source>
      <translation>突出显示历史记录</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="741"/>
      <source>This font is not monospace, which may not be ideal for playing some text games:
you can use it but there could be issues with aligning columns of text</source>
      <comment>Note that this text is split into two lines so that the message is not too wide in English, please do the same for other locales where the text is the same or longer</comment>
      <translation>这个字体不是等宽字体，在玩一些文字游戏时, 可能有文本不对齐的问题.</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1268"/>
      <source>Autocomplete Lua functions in code editor</source>
      <translation>在代码编辑器中自动补全(自动完成) Lua 函数</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1311"/>
      <source>&lt;p&gt;The foreground color used by default for the main console (unless changed by a lua command or the game server).&lt;/p&gt;</source>
      <translation>&lt;p&gt;用于主控制台的默认前景颜色（除非通过Lua命令或游戏服务器进行了修改）。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1334"/>
      <source>&lt;p&gt;The background color used by default for the main console (unless changed by a lua command or the game server).&lt;/p&gt;</source>
      <translation>&lt;p&gt;用于主控制台的默认背景颜色（除非通过Lua命令或游戏服务器进行了修改）。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1354"/>
      <source>&lt;p&gt;The foreground color used for the main input area.&lt;/p&gt;</source>
      <translation>&lt;p&gt;用于主输入区的前景颜色。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1371"/>
      <source>&lt;p&gt;The background color used for the main input area.&lt;/p&gt;</source>
      <translation>&lt;p&gt;用于主输入区的背景颜色。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1388"/>
      <source>&lt;p&gt;The foreground color used for text sent to the game server.&lt;/p&gt;</source>
      <translation>&lt;p&gt;用于送往游戏服务器的文本的前景颜色。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1408"/>
      <source>&lt;p&gt;The background color used for text sent to the game server.&lt;/p&gt;</source>
      <translation>&lt;p&gt;用于送往游戏服务器的文本的背景颜色。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1434"/>
      <source>These preferences set how you want a particular color to be represented visually in the main display:</source>
      <translation>这些偏好设置是你想要在主显示中直观显示的特定颜色：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1444"/>
      <location filename="../src/ui/profile_preferences.ui" line="2262"/>
      <source>Black:</source>
      <translation>黑色：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1451"/>
      <source>ANSI Color Number 0</source>
      <translation>ANSI颜色编号0</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1464"/>
      <location filename="../src/ui/profile_preferences.ui" line="2279"/>
      <source>Light black:</source>
      <translation>浅黑色:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1471"/>
      <source>ANSI Color Number 8</source>
      <translation>ANSI颜色编号8</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1484"/>
      <location filename="../src/ui/profile_preferences.ui" line="2296"/>
      <source>Red:</source>
      <translation>红色：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1491"/>
      <source>ANSI Color Number 1</source>
      <translation>ANSI颜色编号1</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1504"/>
      <location filename="../src/ui/profile_preferences.ui" line="2313"/>
      <source>Light red:</source>
      <translation>浅红色:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1511"/>
      <source>ANSI Color Number 9</source>
      <translation>ANSI颜色编号9</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1524"/>
      <location filename="../src/ui/profile_preferences.ui" line="2330"/>
      <source>Green:</source>
      <translation>绿色：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1531"/>
      <source>ANSI Color Number 2</source>
      <translation>ANSI颜色编号2</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1544"/>
      <location filename="../src/ui/profile_preferences.ui" line="2347"/>
      <source>Light green:</source>
      <translation>浅绿色:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1551"/>
      <source>ANSI Color Number 10</source>
      <translation>ANSI颜色编号10</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1564"/>
      <location filename="../src/ui/profile_preferences.ui" line="2364"/>
      <source>Yellow:</source>
      <translation>黄色:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1571"/>
      <source>ANSI Color Number 3</source>
      <translation>ANSI颜色编号3</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1584"/>
      <location filename="../src/ui/profile_preferences.ui" line="2381"/>
      <source>Light yellow:</source>
      <translation>淡黄色:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1591"/>
      <source>ANSI Color Number 11</source>
      <translation>ANSI颜色编号11</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1604"/>
      <location filename="../src/ui/profile_preferences.ui" line="2398"/>
      <source>Blue:</source>
      <translation>蓝色：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1611"/>
      <source>ANSI Color Number 4</source>
      <translation>ANSI颜色编号4</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1624"/>
      <location filename="../src/ui/profile_preferences.ui" line="2415"/>
      <source>Light blue:</source>
      <translation>浅蓝色:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1631"/>
      <source>ANSI Color Number 12</source>
      <translation>ANSI颜色编号12</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1644"/>
      <location filename="../src/ui/profile_preferences.ui" line="2432"/>
      <source>Magenta:</source>
      <translation>品红：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1651"/>
      <source>ANSI Color Number 5</source>
      <translation>ANSI颜色编号5</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1664"/>
      <location filename="../src/ui/profile_preferences.ui" line="2449"/>
      <source>Light magenta:</source>
      <translation>浅洋红色:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1671"/>
      <source>ANSI Color Number 13</source>
      <translation>ANSI颜色编号13</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1684"/>
      <location filename="../src/ui/profile_preferences.ui" line="2466"/>
      <source>Cyan:</source>
      <translation>青色：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1691"/>
      <source>ANSI Color Number 6</source>
      <translation>ANSI颜色编号6</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1704"/>
      <location filename="../src/ui/profile_preferences.ui" line="2483"/>
      <source>Light cyan:</source>
      <translation>浅青色:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1711"/>
      <source>ANSI Color Number 14</source>
      <translation>ANSI颜色编号14</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1724"/>
      <location filename="../src/ui/profile_preferences.ui" line="2500"/>
      <source>White:</source>
      <translation>白色:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1731"/>
      <source>ANSI Color Number 7</source>
      <translation>ANSI颜色编号7</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1744"/>
      <location filename="../src/ui/profile_preferences.ui" line="2517"/>
      <source>Light white:</source>
      <translation>浅白色:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1751"/>
      <source>ANSI Color Number 15</source>
      <translation>ANSI颜色编号15</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1764"/>
      <location filename="../src/ui/profile_preferences.ui" line="2534"/>
      <source>Reset all colors to default</source>
      <translation>重置所有颜色为默认值</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1771"/>
      <source>&lt;p&gt;If this option is checked the Mud Server may send codes to change the above 16 colors or to reset them to their defaults by using standard ANSI &lt;tt&gt;OSC&lt;/tt&gt; Escape codes.&lt;/p&gt;&lt;p&gt;Specifically &lt;tt&gt;&amp;lt;OSC&amp;gt;Pirrggbb&amp;lt;ST&amp;gt;&lt;/tt&gt; will set the color with index &lt;i&gt;i&lt;/i&gt; to have the color with the given &lt;i&gt;rr&lt;/i&gt; red, &lt;i&gt;gg&lt;/i&gt; green and &lt;i&gt;bb&lt;/i&gt;  blue components where i is a single hex-digit (&apos;0&apos; to &apos;9&apos; or &apos;a&apos; to &apos;f&apos; or &apos;A&apos; to &apos;F&apos; to give a number between 0 an d15) and rr, gg and bb are two digit hex-digits numbers (between 0 to 255); &amp;lt;OSC&amp;gt; is &lt;i&gt;Operating System Command&lt;/i&gt; which is normally encoded as the ASCII &amp;lt;ESC&amp;gt; character followed by &lt;tt&gt;[&lt;/tt&gt; and &amp;lt;ST&amp;gt; is the &lt;i&gt;String Terminator&lt;/i&gt; which is normally encoded as the ASCII &amp;lt;ESC&amp;gt; character followed by &lt;tt&gt;\&lt;tt&gt;.&lt;/p&gt;&lt;p&gt;Conversely &lt;tt&gt;&amp;lt;OSC&amp;gt;R&amp;lt;ST&amp;gt;&lt;/tt&gt; will reset the colors to the defaults like the button to the right does.&lt;/p&gt;</source>
      <translation>&lt;p&gt;如果勾选了此项，Mud服务器可能会送出代码来修改为超过16色或通过使用标准ANSI&lt;tt&gt;OSC&lt;/tt&gt;Escape code来重置它们为它们的默认值。&lt;/p&gt;&lt;p&gt;具体地说&lt;tt&gt;&amp;&lt;OSC>Pirrggbb&amp;&lt;ST>&amp;&lt;/tt&gt;将会设置index/&lt;i&gt;&lt;/i&gt;的颜色为指定的&lt;i&gt;rr&lt;/i&gt;红色、&lt;i&gt;gg&lt;/i&gt;绿色、&lt;i&gt;bb&lt;/i&gt;蓝色所混合的颜色。其中i是1位16进制数（&apos;0&apos;到9&apos;，或&apos;a&apos;到&apos;f&apos;，或&apos;A&apos;到&apos;F&apos;为0到d15），而rr、gg、bb为2位16进制数（0到255之间）；&amp;&lt;OSC>&amp;是&lt;i&gt;Operating System Command&lt;/i&gt;，它是象ASCII那样的正常编码,&amp;&lt;ESC>&amp;字符后面为&lt;tt&gt;[&lt;/tt&gt;，而&amp;&lt;ST>&amp;是&lt;i&gt;String Terminator&lt;/i&gt;，它是象ASCII那样的正常编码，&amp;&lt;ESC>&amp;字符后面是&lt;tt&gt;\&lt;tt&gt;.&lt;/p&gt;&lt;p&gt;反之，&lt;tt&gt;&amp;&lt;OSC>&amp;R&amp;&lt;ST>&amp;&lt;/tt&gt;将会重置颜色为右边按钮的默认值。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1774"/>
      <source>Server allowed to redefine these colors</source>
      <translation>允许服务器重定义这些颜色</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1798"/>
      <source>Mapper</source>
      <translation>地图器</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1804"/>
      <source>Map files</source>
      <translation>地图文件</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1810"/>
      <source>Save your current map:</source>
      <translation>保存你的当前地图到：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1820"/>
      <source>Press to choose location and save</source>
      <translation>按下来选择位置并保存</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1827"/>
      <source>Load another map file in:</source>
      <translation>载入另一地图文件：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1837"/>
      <source>Press to choose file and load</source>
      <translation>按下来选择文件并载入</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1844"/>
      <source>&lt;p&gt;Mudlet now does some sanity checking and repairing to clean up issues that may have arisen in previous version due to faulty code or badly documented commands. However if significant problems are found the report can be quite extensive, in particular for larger maps.&lt;/p&gt;&lt;p&gt;Unless this option is set, Mudlet will reduce the amount of on-screen messages by hiding many texts and showing a suggestion to review the report file instead.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1928"/>
      <source>&lt;p&gt;Change this to a lower version if you need to save your map in a format that can be read by older versions of Mudlet. Doing so will lose the extra data available in the current map format&lt;/p&gt;</source>
      <translation>&lt;p&gt;在你需要在老版本的Mudlet上阅读时，将你的地图保存为低版本的格式。这样做将会丢失可用于当前地图格式的额外信息。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1958"/>
      <source>Download latest map provided by your game:</source>
      <translation>下载由您的游戏提供的最新地图:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1987"/>
      <source>&lt;p&gt;This enables anti-aliasing (AA) for the 2D map view, making it look smoother and nicer. Disable this if you&apos;re on a very slow computer.&lt;/p&gt;&lt;p&gt;3D map view always has anti-aliasing enabled.&lt;/p&gt;</source>
      <translation>&lt;p&gt;启用适用于2D地图显示的抗锯齿（AA），这会看上去更平滑更漂亮。要是你&apos;在一台非常慢的电脑上的话，就禁用此项。&lt;/p&gt;&lt;p&gt;3D地图显示会始终启用抗锯齿的。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1997"/>
      <source>&lt;p&gt;The default area (area id -1) is used by some mapper scripts as a temporary &apos;holding area&apos; for rooms before they&apos;re placed in the correct area&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2049"/>
      <source>2D map player room marker style:</source>
      <translation>2D 地图玩家房间标记样式：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2059"/>
      <source>Outer ring color</source>
      <translation>外圈颜色</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2069"/>
      <source>Inner ring color</source>
      <translation>内圈颜色</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2083"/>
      <source>Original</source>
      <translation>原始</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2088"/>
      <source>Red ring</source>
      <translation>红圈</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2093"/>
      <source>Blue/Yellow ring</source>
      <translation>蓝/黄圈</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2098"/>
      <source>Custom ring</source>
      <translation>自定义圈</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2106"/>
      <source>&lt;p&gt;Percentage ratio (&lt;i&gt;the default is 120%&lt;/i&gt;) of the marker symbol to the space available for the room.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2112"/>
      <location filename="../src/ui/profile_preferences.ui" line="2140"/>
      <source>%</source>
      <translation>%</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2115"/>
      <source>Outer diameter: </source>
      <translation>外径: </translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2134"/>
      <source>&lt;p&gt;Percentage ratio of the inner diameter of the marker symbol to the outer one (&lt;i&gt;the default is 70%&lt;/i&gt;).&lt;/p&gt;</source>
      <translation>&lt;p&gt;标记符号内部直径与外部直径的百分比 (&lt;i&gt;默认是 70%&lt;/i&gt;)。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2143"/>
      <source>Inner diameter: </source>
      <translation>内径： </translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2159"/>
      <source>&lt;p&gt;This enables borders around room. Color can be set in Mapper colors tab&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2162"/>
      <source>Show room borders</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2238"/>
      <source>Room border color:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2558"/>
      <source>Chat</source>
      <translation>聊天</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3250"/>
      <source>Special options needed for some older game drivers (needs client restart to take effect)</source>
      <translation>特别选项需要一些较早的老游戏驱动（需要客户端重启才生效）</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3288"/>
      <source>Force CHARSET negotiation off</source>
      <translation>强制关闭字符集协商</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3390"/>
      <source>the computer&apos;s password manager (secure)</source>
      <translation>计算机密码管理器 (安全)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3395"/>
      <source>plaintext with the profile (portable)</source>
      <translation>带有配置文件的明文（便携式）</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3486"/>
      <source>&lt;p&gt;If checked this will cause all problem Unicode codepoints to be reported in the debug output as they occur; if cleared then each different one will only be reported once and summarized in as a table when the console in which they occurred is finally destroyed (when the profile is closed).&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3372"/>
      <source>&lt;p&gt;Some MUDs use a flawed interpretation of the ANSI Set Graphics Rendition (&lt;b&gt;SGR&lt;/b&gt;) code sequences for 16M color mode which only uses semi-colons and not colons to separate parameter elements i.e. instead of using a code in the form: &lt;br&gt;&lt;tt&gt;\e[&lt;/tt&gt;...&lt;tt&gt;38:2:&lt;/tt&gt;&amp;lt;Color Space Id&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Red&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Green&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Blue&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Unused&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Tolerance&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Tolerance Color Space (0=CIELUV; 1=CIELAB)&amp;gt;&lt;tt&gt;;&lt;/tt&gt;...&lt;tt&gt;m&lt;/tt&gt;&lt;br&gt;where the &lt;i&gt;Color Space Id&lt;/i&gt; is expected to be an empty string to specify the usual (default) case and all of the &lt;i&gt;Parameter Elements&lt;/i&gt; (the &quot;2&quot; and the values in the &lt;tt&gt;&amp;lt;...&amp;gt;&lt;/tt&gt;s) may, technically, be omitted; they use: &lt;br&gt;&lt;tt&gt;\e[&lt;/tt&gt;...&lt;tt&gt;38;2;&lt;/tt&gt;&amp;lt;Red&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Green&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Blue&amp;gt;&lt;tt&gt;;&lt;/tt&gt;...&lt;tt&gt;m&lt;/tt&gt;&lt;br&gt;or: &lt;br&gt;&lt;tt&gt;\e[&lt;/tt&gt;...&lt;tt&gt;38;2;&lt;/tt&gt;&amp;lt;Color Space Id&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Red&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Green&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Blue&amp;gt;&lt;tt&gt;;&lt;/tt&gt;...&lt;tt&gt;m&lt;/tt&gt;&lt;/p&gt;&lt;p&gt;It is not possible to reliably detect the difference between these two so checking this option causes Mudlet to expect the last one with the additional (but empty!) parameter.&lt;/p&gt;</source>
      <translation>&lt;p&gt;有些MUD使用了ANSI Set Graphics Rendition (&lt;b&gt;SGR&lt;/b&gt;) 那有缺陷的解释器，16M色模式下的码序只能使用分号而不是冒号来分隔各元素间的参数，即不是这样来使用表格中的代码： &lt;br&gt;&lt;tt&gt;\e[&lt;/tt&gt;...&lt;tt&gt;38:2:&lt;/tt&gt;&amp;lt;Color Space Id&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Red&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Green&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Blue&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Unused&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Tolerance&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Tolerance Color Space (0=CIELUV; 1=CIELAB)&amp;gt;&lt;tt&gt;;&lt;/tt&gt;...&lt;tt&gt;m&lt;/tt&gt;&lt;br&gt;。其中&lt;i&gt;Color Space Id&lt;/i&gt;预测是指定为常用（默认）情况的空字符串，而所有的&lt;i&gt;元素参数&lt;/i&gt;（&quot;2&quot;和 &lt;tt&gt;&amp;lt;...&amp;gt;&lt;/tt&gt;s中的值）可能，在技术上，被省略了；它们这样使用：&lt;br&gt;&lt;tt&gt;\e[&lt;/tt&gt;...&lt;tt&gt;38;2;&lt;/tt&gt;&amp;lt;Red&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Green&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Blue&amp;gt;&lt;tt&gt;;&lt;/tt&gt;...&lt;tt&gt;m&lt;/tt&gt;&lt;br&gt;or: &lt;br&gt;&lt;tt&gt;\e[&lt;/tt&gt;...&lt;tt&gt;38;2;&lt;/tt&gt;&amp;lt;Color Space Id&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Red&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Green&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Blue&amp;gt;&lt;tt&gt;;&lt;/tt&gt;...&lt;tt&gt;m&lt;/tt&gt;&lt;/p&gt;&lt;p&gt;这样不可能稳妥地发现两者之间的不同，因此勾选此项来让Mudlet预测附加的最后一项（但不能为空！）参数。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3375"/>
      <source>Expect Color Space Id in SGR...(3|4)8;2;...m codes</source>
      <translation>在SGR...(3|4)8;2;...m代码中预测Color Space Id</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3382"/>
      <source>Store character login passwords in:</source>
      <translation>保存角色登录密码：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3408"/>
      <source>TextLabel</source>
      <translation>文本标签</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2816"/>
      <source>TLS/SSL secure connection</source>
      <translation>TLS/SSL 安全连接</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3120"/>
      <source>Accept self-signed certificates</source>
      <translation>接受自签名认证</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3130"/>
      <source>Accept expired certificates</source>
      <translation>接受过期认证</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2834"/>
      <source>Certificate</source>
      <translation>认证</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2894"/>
      <source>Serial:</source>
      <translation>序列号：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2843"/>
      <source>Issuer:</source>
      <translation>发证者：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2860"/>
      <source>Issued to:</source>
      <translation>发证给：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2877"/>
      <source>Expires:</source>
      <translation>到期时间：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3140"/>
      <source>Accept all certificate errors       (unsecure)</source>
      <translation>接受所有的认证错误（不安全）</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1847"/>
      <source>Report map issues on screen</source>
      <translation>在屏幕上报告地图问题</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1861"/>
      <source>Copy map to other profile(s):</source>
      <translation>将地图复制到其他配置文件：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1877"/>
      <source>Press to pick destination(s)</source>
      <translation>按下来选择目标位置</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1890"/>
      <source>Copy to destination(s)</source>
      <translation>复制到目标位置</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1902"/>
      <source>An action above happened</source>
      <translation>发生上述操作</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1909"/>
      <source>Map format version:</source>
      <translation>地图格式版本:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1934"/>
      <location filename="../src/ui/profile_preferences.ui" line="1938"/>
      <source># {default version}</source>
      <translation># {default version}</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1949"/>
      <source>Map download</source>
      <translation>地图下载</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1971"/>
      <source>Download</source>
      <translation>下载</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1981"/>
      <source>Map view</source>
      <translation>地图显示</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2010"/>
      <source>2D Map Room Symbol Font</source>
      <translation>2D地图的房间标志字体</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1990"/>
      <source>Use high quality graphics in 2D view</source>
      <translation>在2D显示时使用高质量图形</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="184"/>
      <source>&lt;p&gt;Can you help translate Mudlet?&lt;/p&gt;&lt;p&gt;If so, please visit: &lt;b&gt;https://www.mudlet.org/translate&lt;/b&gt;.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;你能帮忙翻译Mudlet吗？&lt;bspan style=&quot;font-weight:600;&quot;&gt;https://www.mudlet.org/translate&lt;b/span&gt;&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1874"/>
      <source>&lt;p&gt;Select profiles that you want to copy map to, then press the Copy button to the right&lt;/p&gt;</source>
      <translation>&lt;p&gt;选择要复制地图到哪个配置文件，然后按下&lt;/p&gt; 右侧的复制按钮</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1887"/>
      <source>&lt;p&gt;Copy map into the selected profiles on the left&lt;/p&gt;</source>
      <translation>&lt;p&gt;复制地图至选定的配置文件&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1955"/>
      <location filename="../src/ui/profile_preferences.ui" line="1968"/>
      <source>&lt;p&gt;On games that provide maps for download, you can press this button to get the latest map. Note that this will &lt;span style=&quot; font-weight:600;&quot;&gt;overwrite&lt;/span&gt; any changes you&apos;ve done to your map, and will use the new map only&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2000"/>
      <source>Show the default area in map area selection</source>
      <translation>显示地图区域中的默认区域</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2020"/>
      <source>Only use symbols (glyphs) from chosen font</source>
      <translation>只使用已选字体的标志（字形）</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2027"/>
      <source>Show symbol usage...</source>
      <translation>显示标志的用法：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2189"/>
      <source>Mapper colors</source>
      <translation>地图颜色</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2195"/>
      <source>Select your color preferences for the map display</source>
      <translation>选择你的地图显示颜色偏好</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2201"/>
      <source>Link color</source>
      <translation>连接色</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2221"/>
      <source>Background color:</source>
      <translation>背景色:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3244"/>
      <source>Special Options</source>
      <translation>特别选项</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3256"/>
      <source>Force compression off</source>
      <translation>强制关闭压缩</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3274"/>
      <source>Force telnet GA signal interpretation off</source>
      <translation>强制关闭telnet的 GA 信号解释</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3263"/>
      <source>This option adds a line line break &lt;LF&gt; or &quot;
&quot; to your command input on empty commands. This option will rarely be necessary.</source>
      <translation>此项在空命令上添加换行&lt;&lt;LF>&gt;或“”到你的命令输入上。本选项极少用到。</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3267"/>
      <source>Force new line on empty commands</source>
      <translation>强制在空命令上新加一行</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3281"/>
      <source>Force MXP negotiation off</source>
      <translation>强制关闭MXP协商</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2635"/>
      <source>Discord privacy</source>
      <translation>Discord隐私</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2668"/>
      <source>Don&apos;t hide small icon or tooltip</source>
      <translation>不要隐藏的小图标或工具提示</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2673"/>
      <source>Hide small icon tooltip</source>
      <translation>隐藏小图标提示</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2678"/>
      <source>Hide small icon and tooltip</source>
      <translation>隐藏小图标和工具提示</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2700"/>
      <source>Hide timer</source>
      <translation>隐藏计时器</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2723"/>
      <location filename="../src/ui/profile_preferences.ui" line="2736"/>
      <location filename="../src/ui/profile_preferences.ui" line="2752"/>
      <location filename="../src/ui/profile_preferences.ui" line="2768"/>
      <source>&lt;p&gt;Mudlet will only show Rich Presence information while you use this Discord username (useful if you have multiple Discord accounts). Leave empty to show it for any Discord account you log in to.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Mudlet 将仅在您使用此 Discord 用户名时显示 Rich Presence 信息（如果您有多个 Discord 帐户，则有用）。如果留空，则会在您登录的任何Discord账户中显示该信息。&lt;/p&gt;&lt;/notr</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2729"/>
      <source>Restrict to:</source>
      <translation>限制为:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2642"/>
      <source>Don&apos;t hide large icon or tooltip</source>
      <translation>不要隐藏的大图标或工具提示</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2647"/>
      <source>Hide large icon tooltip</source>
      <translation>隐藏大图标提示</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2652"/>
      <source>Hide large icon and tooltip</source>
      <translation>隐藏大图标和工具提示</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2707"/>
      <source>&lt;p&gt;Allow Lua to set Discord status&lt;/p&gt;</source>
      <translation>&lt;p&gt;允许Lua设置 Discord 状态&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2710"/>
      <source>Enable Lua API</source>
      <translation>启用Lua API</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2742"/>
      <source>specific Discord username</source>
      <translation>特定的 Discord 用户名</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2686"/>
      <source>Hide state</source>
      <translation>隐藏状态</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2693"/>
      <source>Hide party details</source>
      <translation>隐藏参与方详细信息</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2660"/>
      <source>Hide detail</source>
      <translation>隐藏详情</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2564"/>
      <source>IRC client options</source>
      <translation>IRC 客户端选项</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2580"/>
      <source>irc.example.net</source>
      <translation>irc.example.net</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2587"/>
      <source>Port:</source>
      <translation>端口:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2625"/>
      <source>#channel1 #channel2 #etc...</source>
      <translation>#channel1 #channel2 #etc</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2611"/>
      <source>MudletUser123</source>
      <translation>MudletUser123</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2570"/>
      <source>Server address:</source>
      <translation>服务器地址:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2618"/>
      <source>Auto-join channels: </source>
      <translation>自动进入的频道： </translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2604"/>
      <source>Nickname:</source>
      <translation>昵称:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2597"/>
      <source>6667</source>
      <translation>6667</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3338"/>
      <source>Search Engine</source>
      <translation>搜索引擎</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3322"/>
      <source>Mudlet updates</source>
      <translation>Mudlet 更新</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3328"/>
      <source>Disable automatic updates</source>
      <translation>禁止自动更新</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3350"/>
      <source>Other Special options</source>
      <translation>其它特别选项</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3356"/>
      <source>Show icons on menus</source>
      <translation>在菜单上显示图标</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2810"/>
      <source>Connection</source>
      <translation>连接​​​​​​​​</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3150"/>
      <source>Connect to the game via proxy</source>
      <translation>通过代理连接到游戏</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3165"/>
      <source>Address</source>
      <translation>地址</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3185"/>
      <source>port</source>
      <translation>端口</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3195"/>
      <source>Username for logging into the proxy if requred</source>
      <translation>用于登录代理的用户名（如果需要）</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3201"/>
      <source>username (optional)</source>
      <translation>帐号(选填)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3211"/>
      <source>Password for logging into the proxy if requred</source>
      <translation>用于登录代理的用户名（如果需要）</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3217"/>
      <source>password (optional)</source>
      <translation>密码（选填）</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3436"/>
      <source>Show debug messages for timers not smaller than:</source>
      <translation>为计时器显示调试消息，不小于：</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3442"/>
      <source>&lt;p&gt;Show &apos;LUA OK&apos; messages for Timers with the specified minimum interval (h:mm:ss.zzz), the minimum value (the default) shows all such messages but can render the &lt;i&gt;Central Debug Console&lt;/i&gt; useless if there is a very small interval timer running.&lt;/p&gt;</source>
      <comment>The term in &apos;...&apos; refer to a Mudlet specific thing and ought to match the corresponding translation elsewhere.</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3483"/>
      <source>Report all Codepoint problems immediately</source>
      <translation>立即报告所有Codepoint问题</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3541"/>
      <source>Save</source>
      <translation>保存</translation>
    </message>
  </context>
  <context>
    <name>room_exits</name>
    <message>
      <location filename="../src/ui/room_exits.ui" line="37"/>
      <source>General exits:</source>
      <translation>一般退出：</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="96"/>
      <source>NW exit...</source>
      <translation>NW 出口...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="106"/>
      <location filename="../src/ui/room_exits.ui" line="246"/>
      <location filename="../src/ui/room_exits.ui" line="386"/>
      <location filename="../src/ui/room_exits.ui" line="526"/>
      <location filename="../src/ui/room_exits.ui" line="669"/>
      <location filename="../src/ui/room_exits.ui" line="876"/>
      <location filename="../src/ui/room_exits.ui" line="1013"/>
      <location filename="../src/ui/room_exits.ui" line="1171"/>
      <location filename="../src/ui/room_exits.ui" line="1311"/>
      <location filename="../src/ui/room_exits.ui" line="1451"/>
      <location filename="../src/ui/room_exits.ui" line="1591"/>
      <location filename="../src/ui/room_exits.ui" line="1731"/>
      <source>&lt;p&gt;Set to a positive value to override the default (Room) Weight for using this Exit route, zero value assigns the default.&lt;/p&gt;</source>
      <translation>此出口路径时, 需设置一个非负值以覆盖缺省 (房间) 权重，设为 0 时指定为缺省值。</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="236"/>
      <source>N exit...</source>
      <translation>N 出口...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="376"/>
      <source>NE exit...</source>
      <translation>NE 出口...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="516"/>
      <source>Up exit...</source>
      <translation>Up 出口...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="659"/>
      <source>W exit...</source>
      <translation>W 出口...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="767"/>
      <source>ID:</source>
      <translation>编号:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="790"/>
      <source>Weight:</source>
      <translation>权重:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="866"/>
      <source>E exit...</source>
      <translation>E 出口...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1003"/>
      <source>Down exit...</source>
      <translation>Down 出口...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1155"/>
      <source>SW exit...</source>
      <translation>SW 出口...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1301"/>
      <source>S exit...</source>
      <translation>S 出口...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1441"/>
      <source>SE exit...</source>
      <translation>SE 出口...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1581"/>
      <source>In exit...</source>
      <translation>In 出口...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1721"/>
      <source>Out exit...</source>
      <translation>Out 出口...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1826"/>
      <source>Key:</source>
      <translation>Key:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1844"/>
      <source>No route</source>
      <translation>没有路线</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1859"/>
      <source>Stub Exit</source>
      <translation>被标记为未知的出口</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="67"/>
      <location filename="../src/ui/room_exits.ui" line="207"/>
      <location filename="../src/ui/room_exits.ui" line="347"/>
      <location filename="../src/ui/room_exits.ui" line="487"/>
      <location filename="../src/ui/room_exits.ui" line="627"/>
      <location filename="../src/ui/room_exits.ui" line="837"/>
      <location filename="../src/ui/room_exits.ui" line="974"/>
      <location filename="../src/ui/room_exits.ui" line="1120"/>
      <location filename="../src/ui/room_exits.ui" line="1272"/>
      <location filename="../src/ui/room_exits.ui" line="1412"/>
      <location filename="../src/ui/room_exits.ui" line="1552"/>
      <location filename="../src/ui/room_exits.ui" line="1692"/>
      <location filename="../src/ui/room_exits.ui" line="2057"/>
      <source>&lt;p&gt;Prevent a route being created via this exit, equivalent to an infinite exit weight.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="83"/>
      <location filename="../src/ui/room_exits.ui" line="223"/>
      <location filename="../src/ui/room_exits.ui" line="363"/>
      <location filename="../src/ui/room_exits.ui" line="503"/>
      <location filename="../src/ui/room_exits.ui" line="643"/>
      <location filename="../src/ui/room_exits.ui" line="853"/>
      <location filename="../src/ui/room_exits.ui" line="990"/>
      <location filename="../src/ui/room_exits.ui" line="1142"/>
      <location filename="../src/ui/room_exits.ui" line="1288"/>
      <location filename="../src/ui/room_exits.ui" line="1428"/>
      <location filename="../src/ui/room_exits.ui" line="1568"/>
      <location filename="../src/ui/room_exits.ui" line="1708"/>
      <source>&lt;p&gt;Create an exit in this direction with unknown destination, mutually exclusive with an actual exit roomID.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="93"/>
      <source>&lt;p&gt;Set the number of the room northwest of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="119"/>
      <location filename="../src/ui/room_exits.ui" line="259"/>
      <location filename="../src/ui/room_exits.ui" line="399"/>
      <location filename="../src/ui/room_exits.ui" line="539"/>
      <location filename="../src/ui/room_exits.ui" line="682"/>
      <location filename="../src/ui/room_exits.ui" line="886"/>
      <location filename="../src/ui/room_exits.ui" line="1026"/>
      <location filename="../src/ui/room_exits.ui" line="1184"/>
      <location filename="../src/ui/room_exits.ui" line="1324"/>
      <location filename="../src/ui/room_exits.ui" line="1464"/>
      <location filename="../src/ui/room_exits.ui" line="1604"/>
      <location filename="../src/ui/room_exits.ui" line="1744"/>
      <source>&lt;p&gt;No door symbol is drawn on 2D Map for this exit.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="138"/>
      <location filename="../src/ui/room_exits.ui" line="278"/>
      <location filename="../src/ui/room_exits.ui" line="418"/>
      <location filename="../src/ui/room_exits.ui" line="701"/>
      <location filename="../src/ui/room_exits.ui" line="905"/>
      <location filename="../src/ui/room_exits.ui" line="1203"/>
      <location filename="../src/ui/room_exits.ui" line="1343"/>
      <location filename="../src/ui/room_exits.ui" line="1483"/>
      <source>&lt;p&gt;Green (Open) door symbol is drawn on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;绿色(打开)门符号是在二维地图上绘制的，可被标记为未知出口或一个真实房间出口. &lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="154"/>
      <location filename="../src/ui/room_exits.ui" line="294"/>
      <location filename="../src/ui/room_exits.ui" line="434"/>
      <location filename="../src/ui/room_exits.ui" line="717"/>
      <location filename="../src/ui/room_exits.ui" line="921"/>
      <location filename="../src/ui/room_exits.ui" line="1219"/>
      <location filename="../src/ui/room_exits.ui" line="1359"/>
      <location filename="../src/ui/room_exits.ui" line="1499"/>
      <source>&lt;p&gt;Orange (Closed) door symbol is drawn on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;橘色(打开)门符号是在二维地图上绘制的，可被标记为未知出口或一个真实房间出口. &lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="170"/>
      <location filename="../src/ui/room_exits.ui" line="310"/>
      <location filename="../src/ui/room_exits.ui" line="450"/>
      <location filename="../src/ui/room_exits.ui" line="733"/>
      <location filename="../src/ui/room_exits.ui" line="937"/>
      <location filename="../src/ui/room_exits.ui" line="1235"/>
      <location filename="../src/ui/room_exits.ui" line="1375"/>
      <location filename="../src/ui/room_exits.ui" line="1515"/>
      <source>&lt;p&gt;Red (Locked) door symbol is drawn on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;红色(锁上的)门符号是在二维地图上绘制的，可被标记为未知出口或一个真实房间出口. &lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="233"/>
      <source>&lt;p&gt;Set the number of the room north of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="373"/>
      <source>&lt;p&gt;Set the number of the room northeast of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="513"/>
      <source>&lt;p&gt;Set the number of the room up from this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;设置房间 up 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="558"/>
      <location filename="../src/ui/room_exits.ui" line="1045"/>
      <location filename="../src/ui/room_exits.ui" line="1623"/>
      <location filename="../src/ui/room_exits.ui" line="1763"/>
      <source>&lt;p&gt;A symbol is drawn with a green (Open) fill color on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;在2D Map上使用绿色(Open)填充颜色绘制符号，可被标记为未知出口或一个真实房间出口.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="574"/>
      <location filename="../src/ui/room_exits.ui" line="1061"/>
      <location filename="../src/ui/room_exits.ui" line="1639"/>
      <location filename="../src/ui/room_exits.ui" line="1779"/>
      <source>&lt;p&gt;A symbol is drawn with an orange (Closed) fill color on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;在2D Map上使用橘色(Open)填充颜色绘制符号，可被标记为未知出口或一个真实房间出口.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="590"/>
      <location filename="../src/ui/room_exits.ui" line="1077"/>
      <location filename="../src/ui/room_exits.ui" line="1655"/>
      <location filename="../src/ui/room_exits.ui" line="1795"/>
      <source>&lt;p&gt;A symbol is drawn with a red (Locked) fill color on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;在2D Map上使用红色(锁住的)填充颜色绘制符号，可被标记为未知出口或一个真实房间出口.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="653"/>
      <source>&lt;p&gt;Set the number of the room west of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;设置房间 west 的编号, 蓝色表示有效数字, 红色表示无效。</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="780"/>
      <source>&lt;p&gt;This is the Room ID Number for this room - it cannot be changed here!</source>
      <translation>&lt;p&gt;这是本房间的房间编号--不能在此更改!</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="803"/>
      <source>&lt;p&gt;This is the default weight for this room, which will be used for any exit &lt;i&gt;that leads to &lt;u&gt;this room&lt;/u&gt;&lt;/i&gt; which does not have its own value set - this value cannot be changed here.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="863"/>
      <source>&lt;p&gt;Set the number of the room east of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;设置当前房间东边的房间号，将蓝色为有效号，红色为无效号。&lt;/p&gt;。</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1000"/>
      <source>&lt;p&gt;Set the number of the room down from this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1152"/>
      <source>&lt;p&gt;Set the number of the room southwest of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;设置当前房间的西南面房间的号码，将蓝色为有效号码，红色为无效号码。&lt;/p&gt;。</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1298"/>
      <source>&lt;p&gt;Set the number of the room south of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;设置当前房间南边的房间号，将蓝色为有效号，红色为无效号。&lt;/p&gt;。</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1438"/>
      <source>&lt;p&gt;Set the number of the room southeast of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;设置当前房间的东南面房间的号码，将蓝色为有效号码，红色为无效号码。&lt;/p&gt;。</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1578"/>
      <source>&lt;p&gt;Set the number of the room in from this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1718"/>
      <source>&lt;p&gt;Set the number of the room out from this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1871"/>
      <source>&lt;p&gt;Set the number of the room that&apos;s to the southwest here.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1874"/>
      <source>Exit RoomID number</source>
      <translation>出口房间 Id</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1901"/>
      <source>No door</source>
      <translation>没有门</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1916"/>
      <source>Open door</source>
      <translation>开启的门</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1928"/>
      <source>Closed door</source>
      <translation>关上的门</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1940"/>
      <source>Locked door</source>
      <translation>被锁住的门</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1975"/>
      <source>&lt;p&gt;Use this button to save any changes, will also remove any invalid Special exits.&lt;/p&gt;</source>
      <translation>&lt;p&gt;使用此按钮来保存更改，同时将除去任何无效的特殊出口。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1991"/>
      <source>&lt;p&gt;Use this button to close the dialogue without changing anything.&lt;/p&gt;</source>
      <translation>&lt;p&gt;使用此按钮来关闭对话,但不更改任何内容。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2010"/>
      <source>&lt;p&gt;Click on an item to edit/change it, to DELETE a Special Exit set its Exit Room ID to zero.&lt;/p&gt;</source>
      <translation>&lt;p&gt;单击项目以编辑/更改它，以 删除 特殊出口将其 " 出口房间标识 " 设置为零。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2048"/>
      <source>&lt;p&gt;Set the number of the room that this exit leads to, if set to zero the exit will be removed on saving the exits.&lt;/p&gt;</source>
      <translation>&lt;p&gt;设置此出口通向的房间ID，如果设置为零，将在保存出口时被移除。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2075"/>
      <source>&lt;p&gt;No door symbol is drawn on 2D Map for this exit (only functional choice currently).&lt;/p&gt;</source>
      <translation>在2D 地图上没有为此出口绘制门符号（目前该选项仅供选择）。</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2084"/>
      <source>&lt;p&gt;Green (Open) door symbol would be drawn on 2D Map (but not currently).&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2093"/>
      <source>&lt;p&gt;Orange (Closed) door symbol would be drawn on 2D Map (but not currently).&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2102"/>
      <source>&lt;p&gt;Red (Locked) door symbol would be drawn on 2D Map (but not currently).&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2111"/>
      <source>&lt;p&gt;(Lua scripts need to be prefixed with &quot;script:&quot;).&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2128"/>
      <source>&lt;p&gt;Add an empty item to Special exits to be edited as required.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2147"/>
      <source>&lt;p&gt;Press this button to deactivate the selection of a Special exit.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1978"/>
      <source>&amp;Save</source>
      <translation>&amp;保存</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1886"/>
      <source>Exit Weight (0=No override)</source>
      <translation>出口权重 (0=无覆盖)</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1994"/>
      <source>&amp;Cancel</source>
      <translation>&amp;取消</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2001"/>
      <source>Special exits:</source>
      <translation>特殊出口:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2044"/>
      <source>Exit
Room ID</source>
      <translation>出口
房间ID</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2053"/>
      <source>No
Route</source>
      <translation>没有路径</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2062"/>
      <source>Exit
Weight</source>
      <translation>出口权重</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2066"/>
      <source>&lt;p&gt;Set to a positive integer value to override the default (Room) Weight for using this Exit route, a zero value assigns the default.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2071"/>
      <source>Door
None</source>
      <translation>门
无。</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2080"/>
      <source>Door
Open</source>
      <translation>开启的门</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2089"/>
      <source>Door
Closed</source>
      <translation>门
被关上</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2098"/>
      <source>Door
Locked</source>
      <translation>门
被锁住</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2107"/>
      <source>Command
or LUA script</source>
      <translation>命令或Lua脚本</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2131"/>
      <source>&amp;Add special exit</source>
      <translation>&amp;添加特殊出口</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2150"/>
      <source>&amp;End S. Exits editing</source>
      <translation>&amp;结束 S. 退出编辑</translation>
    </message>
  </context>
  <context>
    <name>room_symbol</name>
    <message>
      <location filename="../src/ui/room_symbol.ui" line="14"/>
      <location filename="../src/ui/room_symbol.ui" line="112"/>
      <source>Room symbol</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_symbol.ui" line="141"/>
      <source>Color of to use for the room symbol(s)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_symbol.ui" line="147"/>
      <source>Symbol color</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/room_symbol.ui" line="154"/>
      <source>Reset</source>
      <translation>重置</translation>
    </message>
  </context>
  <context>
    <name>scripts_main_area</name>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="23"/>
      <source>Name:</source>
      <translation>名称:</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="40"/>
      <source>Registered Event Handlers:</source>
      <translation>已注册的Event Handlers:</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="33"/>
      <source>&lt;p&gt;Choose a good, (ideally, though it need not be, unique) name for your script or script group. This will be displayed in the script tree.&lt;/p&gt;&lt;p&gt;If a function withn the script is to be used to handle events entered in the list below &lt;b&gt;&lt;u&gt;it must have the same name as is entered here.&lt;/u&gt;&lt;/b&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;为你的脚本或脚本组选择一个好的名字 (最好是唯一的, 但不是必须唯一). 名字将显示在脚本树上.&lt;/p&gt;&lt;p&gt;如果输入在列表下方的脚本中的某个函数是用来处理事件的&lt;b&gt;&lt;u&gt;则它的名字必须和在这输入的是一样的。&lt;/u&gt;&lt;/b&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="88"/>
      <source>&lt;p&gt;Remove (selected) event handler from list.&lt;/p&gt;</source>
      <translation>&lt;p&gt;从列表中删除（已选的）event handler。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="91"/>
      <source>-</source>
      <translation>-</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="98"/>
      <source>Add User Event Handler:</source>
      <translation>添加用户Event Handler:</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="133"/>
      <source>&lt;p&gt;Add entered event handler name to list.&lt;/p&gt;</source>
      <translation>&lt;p&gt;添加输入的event handler名到列表中。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="136"/>
      <source>+</source>
      <translation>+</translation>
    </message>
  </context>
  <context>
    <name>set_room_area</name>
    <message>
      <location filename="../src/ui/set_room_area.ui" line="14"/>
      <source>Move rooms to another area</source>
      <translation>将房间移至另一个区域</translation>
    </message>
    <message>
      <location filename="../src/ui/set_room_area.ui" line="20"/>
      <source>Which area would you like to move the room(s) to?</source>
      <translation>您要将房间移到哪个区域?</translation>
    </message>
  </context>
  <context>
    <name>source_editor_area</name>
    <message>
      <location filename="../src/ui/source_editor_area.ui" line="26"/>
      <source>Form</source>
      <translation>表单</translation>
    </message>
  </context>
  <context>
    <name>timers_main_area</name>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="29"/>
      <source>Name:</source>
      <translation>名称:</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="64"/>
      <source>Command:</source>
      <translation>命令:</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="169"/>
      <source>Time:</source>
      <translation>时间：</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="39"/>
      <source>&lt;p&gt;Choose a good, (ideally, though it need not be, unique) name for your timer, offset-timer or timer group. This will be displayed in the timer tree.&lt;/p&gt;</source>
      <translation>&lt;p&gt;为你的定时器、分支定时器或定时器组选择一个好的名字 (最好是唯一的, 但不是必须唯一). 名字将显示在定时器树上.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="74"/>
      <source>&lt;p&gt;Type in one or more commands you want the timer to send directly to the game when the time has elapsed. (Optional)&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation>&lt;p&gt;输入一或多个你希望能直接送往游戏中的定时器命令，只要时间能够流逝（可选项）&lt;/p&gt;&lt;p&gt;要送出更复杂的命令，可能要依靠或需要在配置中输入修改了的Lua脚本变量，&lt;i&gt;而不是&lt;/i&gt;在下方的编辑区。此处输入的任何东西，真的将会送往游戏服务器。&lt;/p&gt;&lt;p&gt;允许同时使用&lt;i&gt;Lua脚本&lt;/i&gt;——这将会在脚本运行&lt;b&gt;之前&lt;/b&gt;送出。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="77"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="89"/>
      <source>&lt;p&gt;hours&lt;/p&gt;</source>
      <translation>&lt;p&gt;小时&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="104"/>
      <source>&lt;p&gt;minutes&lt;/p&gt;</source>
      <translation>&lt;p&gt;分钟&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="119"/>
      <source>&lt;p&gt;seconds&lt;/p&gt;</source>
      <translation>&lt;p&gt;秒&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="134"/>
      <source>&lt;p&gt;miliseconds&lt;/p&gt;</source>
      <translation>&lt;p&gt;毫秒&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="184"/>
      <source>&lt;p&gt;The &lt;b&gt;hour&lt;/b&gt; part of the interval that the timer will go off at.&lt;/p&gt;</source>
      <translation>&lt;p&gt;定时器将停止运行的&lt;b&gt;小时&lt;/b&gt;间隔部分。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="392"/>
      <source>&lt;p&gt;The &lt;b&gt;millisecond&lt;/b&gt; part of the interval that the timer will go off at (1000 milliseconds = 1 second).&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="260"/>
      <source>&lt;p&gt;The &lt;b&gt;minute&lt;/b&gt; part of the interval that the timer will go off at.&lt;/p&gt;</source>
      <translation>&lt;p&gt;定时器将停止运行的&lt;b&gt;分钟&lt;/b&gt;间隔部分。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="326"/>
      <source>&lt;p&gt;The &lt;b&gt;second&lt;/b&gt; part of the interval that the timer will go off at.&lt;/p&gt;</source>
      <translation>&lt;p&gt;定时器将停止运行的&lt;b&gt;秒&lt;/b&gt;间隔部分。&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>trigger_editor</name>
    <message>
      <location filename="../src/ui/trigger_editor.ui" line="152"/>
      <location filename="../src/ui/trigger_editor.ui" line="200"/>
      <location filename="../src/ui/trigger_editor.ui" line="245"/>
      <location filename="../src/ui/trigger_editor.ui" line="290"/>
      <location filename="../src/ui/trigger_editor.ui" line="335"/>
      <location filename="../src/ui/trigger_editor.ui" line="380"/>
      <location filename="../src/ui/trigger_editor.ui" line="428"/>
      <location filename="../src/ui/trigger_editor.ui" line="590"/>
      <source>1</source>
      <translation>1</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_editor.ui" line="436"/>
      <source>Show normally hidden variables</source>
      <translation>显示隐藏变量</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_editor.ui" line="476"/>
      <source>&lt;p&gt;Enter text here to search through your code.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/trigger_editor.ui" line="510"/>
      <source>&lt;p&gt;Toggles the display of the search results area.&lt;/p&gt;</source>
      <translation>&lt;p&gt;切换结果搜索区显示。&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>trigger_main_area</name>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="65"/>
      <source>Name:</source>
      <translation>名称:</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="85"/>
      <source>&lt;p&gt;Use this control to show or hide the extra controls for the trigger; this can be used to allow more space to show the trigger &lt;i&gt;items&lt;/i&gt; on smaller screen.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="111"/>
      <source>Command:</source>
      <translation>命令:</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="127"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="201"/>
      <source>&lt;p&gt;The trigger will only fire if &lt;u&gt;all&lt;/u&gt; conditions on the list have been met within the specified line delta, and captures will be saved in &lt;tt&gt;multimatches&lt;/tt&gt; instead of &lt;tt&gt;matches&lt;/tt&gt;.&lt;/p&gt;
&lt;p&gt;If this option is &lt;b&gt;not&lt;/b&gt; set the trigger will fire if &lt;u&gt;any&lt;/u&gt; condition on the list have been met.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="208"/>
      <source>AND / Multi-line (delta)</source>
      <translation>多行匹配(delta)</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="260"/>
      <source>&lt;p&gt;When checked, only the filtered content (=capture groups) will be passed on to child triggers, not the initial line (see manual on filters).&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="266"/>
      <source>only pass matches</source>
      <translation>仅传递匹配项</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="302"/>
      <source>Do not pass whole line to children.</source>
      <translation>不将整行传递给子触发器。</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="324"/>
      <source>&lt;p&gt;Choose this option if you want to include all possible matches of the pattern in the line.&lt;/p&gt;&lt;p&gt;Without this option, the pattern matching will stop after the first successful match.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="360"/>
      <source>Match all occurences of the pattern in the line.</source>
      <translation>匹配行中模式的所有实例。</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="415"/>
      <source>&lt;p&gt;Keep firing the script for this many more lines, after the trigger or chain has matched.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="421"/>
      <source>fire length (extra lines)</source>
      <translation>触发长度(额外行数)</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="479"/>
      <source>&lt;p&gt;Play a sound file if the trigger fires.&lt;/p&gt;</source>
      <translation>&lt;p&gt;触发时播放声音文件。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="524"/>
      <source>&lt;p&gt;Use this to open a file selection dialogue to find a sound file to play when the trigger fires.&lt;/p&gt;
&lt;p&gt;&lt;i&gt;Cancelling from the file dialogue will not make any changes; to clear the file use the clear button to the right of the file name display.&lt;/i&gt;&lt;/p&gt;</source>
      <comment>This is the button used to select a sound file to be played when a trigger fires.</comment>
      <extracomment>Please ensure the text used here is duplicated within the tooltip for the QLineEdit that displays the file name selected.</extracomment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="528"/>
      <source>Choose file...</source>
      <translation>选择文件...</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="559"/>
      <source>no file</source>
      <translation>暂无文件</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="620"/>
      <source>&lt;p&gt;Enable this to highlight the matching text by changing the fore and background colors to the ones selected here.&lt;/p&gt;</source>
      <translation>&lt;p&gt;启用此功能，通过将前景色和背景色更改为此处选择的颜色来突出显示匹配的文本。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="663"/>
      <source>Background</source>
      <translation>背景</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="679"/>
      <location filename="../src/ui/triggers_main_area.ui" line="692"/>
      <source>keep</source>
      <comment>Keep the existing colour on matches to highlight. Use shortest word possible so it fits on the button</comment>
      <translation>保持</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="653"/>
      <source>Foreground</source>
      <translation>前景</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="482"/>
      <source>play sound</source>
      <translation>播放声音</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="78"/>
      <source>&lt;p&gt;Choose a good, (ideally, though it need not be, unique) name for your trigger or trigger group. This will be displayed in the trigger tree.&lt;/p&gt;</source>
      <translation>&lt;p&gt;为你的触发器或触发器组选择一个好的名字 (最好是唯一的, 但不是必须唯一). 名字将显示在触发器树上.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="124"/>
      <source>&lt;p&gt;Type in one or more commands you want the trigger to send directly to the game if it fires. (Optional)&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation>&lt;p&gt;输入一或多个你希望能直接送往游戏中的触发器命令，只要它能生效（可选项）&lt;/p&gt;&lt;p&gt;要送出更复杂的命令，可能要依靠或需要在配置中输入修改了的Lua脚本变量，&lt;i&gt;而不是&lt;/i&gt;在下方的编辑区。此处输入的任何东西，真的将会送往游戏服务器。&lt;/p&gt;&lt;p&gt;允许同时使用&lt;i&gt;Lua脚本&lt;/i&gt;——这将会在脚本运行&lt;b&gt;之前&lt;/b&gt;送出。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="247"/>
      <source>&lt;p&gt;Within how many lines must all conditions be true to fire the trigger?&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="330"/>
      <source>match all</source>
      <translation>全匹配</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="463"/>
      <source>&lt;p&gt;How many more lines, after the one that fired the trigger, should be passed to the trigger&apos;s children?&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="550"/>
      <source>&lt;p&gt;Sound file to play when the trigger fires.&lt;/p&gt;</source>
      <comment>This is the tooltip for the QLineEdit that shows - but does not permit changing - the sound file used for a trigger.</comment>
      <translation>&lt;p&gt;触发触发器时要播放的声音文件. &lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="572"/>
      <source>&lt;p&gt;Click to remove the sound file set for this trigger.&lt;/p&gt;</source>
      <translation>&lt;p&gt;单击以删除为该触发器设置的声音文件. &lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="626"/>
      <source>highlight</source>
      <translation>高亮</translation>
    </message>
  </context>
  <context>
    <name>trigger_pattern_edit</name>
    <message>
      <location filename="../src/ui/trigger_pattern_edit.ui" line="124"/>
      <source>Foreground color ignored</source>
      <translation>忽略的前景色</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_pattern_edit.ui" line="148"/>
      <source>Background color ignored</source>
      <translation>忽略的背景色</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_pattern_edit.ui" line="175"/>
      <source>match on the prompt line</source>
      <translation>在提示行匹配</translation>
    </message>
  </context>
  <context>
    <name>vars_main_area</name>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="109"/>
      <source>Name:</source>
      <translation>名称:</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="175"/>
      <source>⏴ Key type:</source>
      <translation>⏴ 键类型:</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="125"/>
      <source>&lt;p&gt;Set the &lt;i&gt;global variable&lt;/i&gt; or the &lt;i&gt;table entry&lt;/i&gt; name here. The name has to start with a letter, but can contain a mix of letters and numbers.&lt;/p&gt;</source>
      <translation>在此处&lt;p&gt;设置&lt;i&gt;全局变量&lt;/i&gt;或&lt;i&gt;表项&lt;/i&gt;名。名字必须以字母开头，但可以混合字母和数字。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="138"/>
      <source>&lt;p&gt;Tables can store values either in a list, and/or a hashmap.&lt;/p&gt;&lt;p&gt;In a &lt;b&gt;list&lt;/b&gt;, &lt;i&gt;unique indexed keys&lt;/i&gt; represent values - so you can have values at &lt;i&gt;1, 2, 3...&lt;/i&gt;&lt;/p&gt;&lt;p&gt;In a &lt;b&gt;map&lt;/b&gt; {a.k.a. an &lt;i&gt;associative array}&lt;/i&gt;, &lt;i&gt;unique keys&lt;/i&gt; represent values - so you can have values under any identifier you would like (theoretically even a function or other lua entity although this GUI only supports strings).&lt;/p&gt;&lt;p&gt;This, for a newly created table (group) selects whenever you would like your table to be an indexed or an associative one.&lt;/p&gt;&lt;p&gt;In other cases it displays other entities (&lt;span style=&quot; font-style:italic;&quot;&gt;functions&lt;/span&gt;) which cannot be modifed from here.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;表格可以将值存在列表和/或hashmap中。&lt;/p&gt;&lt;p&gt;在&lt;b&gt;列表&lt;/b&gt;中，&lt;i&gt;唯一索引的键&lt;/i&gt;可以代表值——因此你可以定值为&lt;i&gt;1, 2, 3...&lt;/i&gt;&lt;/p&gt;&lt;p&gt;在&lt;b&gt;map&lt;/b&gt; {a.k.a. &lt;i&gt;关联数组}&lt;/i&gt;中, &lt;i&gt;唯一的键&lt;/i&gt;代表了值——所以你可以有任何你想要编号的值（理论上甚至可以是个函数或其它的Lua entity ，即使GUI只支持字符串）。&lt;/p&gt;&lt;p&gt;这样，对于新建的表（组）可以在任何你想要索引或关联表时来选择。&lt;/p&gt;&lt;p&gt;在其它情况下，不能从此处修改时，它会显示其它的项（&lt;span style=&quot; font-style:italic;&quot;&gt;函数&lt;/span&gt;）。&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="51"/>
      <location filename="../src/ui/vars_main_area.ui" line="145"/>
      <source>Auto-Type</source>
      <translation>自动类型</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="128"/>
      <source>Variable name ...</source>
      <translation>变量名...</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="150"/>
      <source>key (string)</source>
      <translation>按键(string)</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="155"/>
      <source>index (integer)</source>
      <translation>索引(整数)</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="71"/>
      <location filename="../src/ui/vars_main_area.ui" line="160"/>
      <source>table</source>
      <translation>表</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="165"/>
      <source>function
(cannot create
from GUI)</source>
      <translation>函数
(无法从GUI创建)</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="185"/>
      <source>&lt;p&gt;If checked this item (and its children, if applicable) does not show in area to the left unless &lt;b&gt;Show normally hidden variables&lt;/b&gt; is checked.&lt;/p&gt;</source>
      <translation>&lt;p&gt;如果勾选了此项（以及它的子项，如果可用的话），将不会把此处显示到左边，除非勾选了&lt;b&gt;显示正常隐藏的变量&lt;/b&gt;。&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="188"/>
      <source>hidden variable</source>
      <translation>隐藏变量</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="84"/>
      <source>⏷ Value type:</source>
      <translation>⏷值类型：</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="56"/>
      <source>string</source>
      <translation>字符串</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="61"/>
      <source>number</source>
      <translation>数字</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="66"/>
      <source>boolean</source>
      <translation>布尔值</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="76"/>
      <source>function</source>
      <translation>函数</translation>
    </message>
  </context>
</TS>
