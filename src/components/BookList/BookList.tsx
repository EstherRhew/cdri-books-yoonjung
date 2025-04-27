import { useState } from 'react';
import { BookItem } from './BookItem';
import { BookItemButtons } from './BookItemButtons';
import { BookItemDescription } from './BookItemDescription';
import { BookItemImage } from './BookItemImage';
import { BookItemInfo } from './BookItemInfo';
import { BookItemPrice } from './BookItemPrice';

export const BookList = () => {
  const [expandedList, setExpandedList] = useState<string[]>([]);

  const toggleExpand = (isbn: string) => {
    setExpandedList(prev => {
      if (prev.includes(isbn)) {
        return prev.filter(item => item !== isbn);
      }
      return [...prev, isbn];
    });
  };

  return (
    <>
      {mockFiles.documents.map(mockFile => {
        const isExpanded = expandedList.includes(mockFile.isbn);
        return (
          <BookItem data={mockFile} expanded={isExpanded} key={mockFile.isbn}>
            <BookItemImage />

            <div className="book-info-layout">
              <BookItemInfo />
              {isExpanded && <BookItemDescription />}
            </div>

            <div className="book-purchase-layout">
              <BookItemPrice />
              <BookItemButtons toggleExpand={toggleExpand} />
            </div>
          </BookItem>
        );
      })}
    </>
  );
};

export const mockFiles = {
  documents: [
    {
      authors: ['기시미 이치로', '고가 후미타케'],
      contents:
        '정면으로 부정하며, 자유도 행복도 모두 ‘용기’의 문제일 뿐 환경이나 능력의 문제가 아님을 보여준 알프레드 아들러(Alfred Adler)다. 2014년 출간돼 51주 연속 베스트셀러 1위를 기록하며 대한민국에 아들러 열풍을 일으킨 책 《미움받을 용기》가 국내 200만 부 판매를 기념하며 리커버 에디션으로 독자들을 찾아왔다. 이번 리커버는 8년간 변함없는 사랑을 보내준 한국 독자들에게 보내는 두 저자의 친서와 함께, 세련된 디자인과 따뜻한 삽화로 새 옷을',
      datetime: '2022-12-28T00:00:00.000+09:00',
      isbn: '1168340772 9791168340770',
      price: 15900,
      publisher: '인플루엔셜',
      sale_price: 14310,
      status: '정상판매',
      thumbnail:
        'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F6253040%3Ftimestamp%3D20240425164740',
      title: '미움받을 용기(200만 부 기념 스페셜 에디션)',
      translators: ['전경아'],
      url: 'https://search.daum.net/search?w=bookpage&bookId=6253040&q=%EB%AF%B8%EC%9B%80%EB%B0%9B%EC%9D%84+%EC%9A%A9%EA%B8%B0%28200%EB%A7%8C+%EB%B6%80+%EA%B8%B0%EB%85%90+%EC%8A%A4%ED%8E%98%EC%85%9C+%EC%97%90%EB%94%94%EC%85%98%29',
    },
    {
      authors: ['기시미 이치로', '고가 후미타케'],
      contents:
        '이런 그의 고민에 “인간은 변할 수 있고, 누구나 행복해 질 수 있다. 단 그러기 위해서는 ‘용기’가 필요하다”고 말한 철학자가 있다. 바로 프로이트, 융과 함께 ‘심리학의 3대 거장’으로 일컬어지고 있는 알프레드 아들러다.  『미움받을 용기』는 아들러 심리학에 관한 일본의 1인자 철학자 기시미 이치로와 베스트셀러 작가인 고가 후미타케의 저서로, 아들러의 심리학을 ‘대화체’로 쉽고 맛깔나게 정리하고 있다. 아들러 심리학을 공부한 철학자와 세상에 부정적',
      datetime: '2014-11-17T00:00:00.000+09:00',
      isbn: '8996991341 9788996991342',
      price: 14900,
      publisher: '인플루엔셜',
      sale_price: 13410,
      status: '정상판매',
      thumbnail:
        'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038%3Ftimestamp%3D20230128141840',
      title: '미움받을 용기',
      translators: ['전경아'],
      url: 'https://search.daum.net/search?w=bookpage&bookId=1467038&q=%EB%AF%B8%EC%9B%80%EB%B0%9B%EC%9D%84+%EC%9A%A9%EA%B8%B0',
    },
    {
      authors: ['기시미 이치로', '고가 후미타케'],
      contents:
        '이미 이 시대의 고전이 된 책!  2015년, 2016년, 2017년 압도적 인기의 인문 교양서 시리즈를  한 권으로 만난다!    역대 최장기간 연속 베스트셀러 1위의 『미움받을 용기』와  출간 한 달 만에 15만 부 판매의 『미움받을 용기 2』를  동시에 만나는 단 한 번의 기회!    인간은 누구나 변할 수 있고 행복해질 수 있다. 그러기 위해서 필요한 건 오직 용기뿐이다. 자유로워질 용기, 행복해질 용기, 그리고 사랑할 용기. 자유와 행복, 사랑',
      datetime: '2018-03-02T00:00:00.000+09:00',
      isbn: '1186560657 9791186560655',
      price: 19800,
      publisher: '인플루엔셜',
      sale_price: 17820,
      status: '정상판매',
      thumbnail:
        'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1630448%3Ftimestamp%3D20241030114256',
      title: '미움받을 용기(특별 합본호)(한정판)',
      translators: ['전경아'],
      url: 'https://search.daum.net/search?w=bookpage&bookId=1630448&q=%EB%AF%B8%EC%9B%80%EB%B0%9B%EC%9D%84+%EC%9A%A9%EA%B8%B0%28%ED%8A%B9%EB%B3%84+%ED%95%A9%EB%B3%B8%ED%98%B8%29%28%ED%95%9C%EC%A0%95%ED%8C%90%29',
    },
    {
      authors: ['기시미 이치로', '고가 후미타케'],
      contents:
        '51주 연속 역대 최장기간 베스트셀러 1위를 기록하며 대한민국 베스트셀러 역사를 새롭게 쓴 《미움받을 용기》가 보다 현실적인 문제에 대한 답을 안고 돌아왔다. 《미움받을 용기 2》는 아들러 심리학을 대중적으로 명쾌히 정리한 ‘용기 2부작’의 완결편으로, ‘행복으로 가는 길’을 제시한 전작에 이어 ‘행복으로 가는 구체적인 방법’에 대해 다룬다.  자유롭고 행복한 삶에 대한 가르침을 받고 부푼 기대를 안고 변화를 결심했지만, 수년 후 ‘중대한 고민’이',
      datetime: '2022-12-28T00:00:00.000+09:00',
      isbn: '1168340780 9791168340787',
      price: 15900,
      publisher: '인플루엔셜',
      sale_price: 14310,
      status: '정상판매',
      thumbnail:
        'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F6252918%3Ftimestamp%3D20240518160512',
      title: '미움받을 용기 2(200만 부 기념 스페셜 에디션)',
      translators: ['전경아'],
      url: 'https://search.daum.net/search?w=bookpage&bookId=6252918&q=%EB%AF%B8%EC%9B%80%EB%B0%9B%EC%9D%84+%EC%9A%A9%EA%B8%B0+2%28200%EB%A7%8C+%EB%B6%80+%EA%B8%B0%EB%85%90+%EC%8A%A4%ED%8E%98%EC%85%9C+%EC%97%90%EB%94%94%EC%85%98%29',
    },
    {
      authors: ['기시미 이치로', '고가 후미타케'],
      contents:
        '대한민국에 아들러 열풍을 일으킨 《미움받을 용기》가 전 세계 1000만 부 돌파, 출간 10주년을 기념하여 《미움받을 용기 2》와 함께 한정판 북케이스에 담겨 출시되었다. 프로이트, 융과 함께 ‘심리학의 3대 거장’으로 불리는 알프레드 아들러의 사상을 쉽고 명쾌하게 정리한 《미움받을 용기》는 2014년 출간되어 51주 연속 역대 최장기 베스트셀러 1위를 기록하며 대한민국 베스트셀러 역사를 다시 썼으며, 아들러 심리학을 현실에 적용하는 구체적인 실천법',
      datetime: '2024-05-31T00:00:00.000+09:00',
      isbn: '1168341957 9791168341951',
      price: 31800,
      publisher: '인플루엔셜',
      sale_price: 28620,
      status: '정상판매',
      thumbnail:
        'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F6650855%3Ftimestamp%3D20250325155622',
      title: '미움받을 용기 2부작 북케이스 세트 (10주년 한정판)',
      translators: ['전경아'],
      url: 'https://search.daum.net/search?w=bookpage&bookId=6650855&q=%EB%AF%B8%EC%9B%80%EB%B0%9B%EC%9D%84+%EC%9A%A9%EA%B8%B0+2%EB%B6%80%EC%9E%91+%EB%B6%81%EC%BC%80%EC%9D%B4%EC%8A%A4+%EC%84%B8%ED%8A%B8+%2810%EC%A3%BC%EB%85%84+%ED%95%9C%EC%A0%95%ED%8C%90%29',
    },
    {
      authors: ['기시미 이치로', '고가 후미타케'],
      contents:
        '역대 최장기간 베스트셀러 1위, 문화계 파워 100인이 선정한 2015년 올해의 책, 네이버 2015년 검색어 책 분야 1위 등 2015년을 ‘아들러’와 ‘용기’ 열풍으로 물들인 『미움받을 용기』가 더욱 새롭고, 강렬한 내용으로 돌아왔다. 그렇다고 이 책을 그저 ‘속편’이라고 생각하면 곤란하다. 저자 기시미 이치로가 “전작이 아들러 사상을 개관하기 위한 ‘지도’였다면, 2권은 아들러의 사상을 실천하고 행복에 이르는 길을 걷도록 알려주는 ‘나침반’과',
      datetime: '2016-05-02T00:00:00.000+09:00',
      isbn: '1186560126 9791186560129',
      price: 14900,
      publisher: '인플루엔셜',
      sale_price: 13410,
      status: '정상판매',
      thumbnail:
        'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1633432%3Ftimestamp%3D20250307113607',
      title: '미움받을 용기 2',
      translators: ['전경아'],
      url: 'https://search.daum.net/search?w=bookpage&bookId=1633432&q=%EB%AF%B8%EC%9B%80%EB%B0%9B%EC%9D%84+%EC%9A%A9%EA%B8%B0+2',
    },
    {
      authors: ['기시미 이치로'],
      contents:
        '『엄마를 위한 미움받을 용기』는 기시미 이치로가 자신의 육아 경험을 살려 ‘교육’이라는 주제로 아들러의 심리학을 풀어 쓴 책이다. 실제로 기시미 이치로는 7년 반 동안 아이들을 직접 보육원에 데려다주고 오는 일을 하였는데, 그때 생생하게 경험하고 느낀 부분을 아들러의 심리학과 접목시켜 진정한 부모 자녀 관계는 무엇인지, 자녀를 기르는 부모의 행복은 어디에 있는지를 찾고 실질적이고 구체적인 방법을 소개한다.  가령, 저자는 아들러의 심리학에서 가장 중요',
      datetime: '2015-06-22T00:00:00.000+09:00',
      isbn: '1157950531 9791157950539',
      price: 14000,
      publisher: '스타북스',
      sale_price: 12600,
      status: '정상판매',
      thumbnail:
        'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1581343%3Ftimestamp%3D20220105181242',
      title: '엄마를 위한 미움받을 용기',
      translators: ['김현정'],
      url: 'https://search.daum.net/search?w=bookpage&bookId=1581343&q=%EC%97%84%EB%A7%88%EB%A5%BC+%EC%9C%84%ED%95%9C+%EB%AF%B8%EC%9B%80%EB%B0%9B%EC%9D%84+%EC%9A%A9%EA%B8%B0',
    },
    {
      authors: ['기시미 이치로'],
      contents: '',
      datetime: '2017-09-01T00:00:00.000+09:00',
      isbn: '7111495489 9787111495482',
      price: 33500,
      publisher: '기계공업출판사',
      sale_price: 29700,
      status: '정상판매',
      thumbnail: '',
      title: '피토염적용기 被討厭的勇氣 미움받을 용기 (日本原作)',
      translators: [],
      url: 'https://search.daum.net/search?w=bookpage&bookId=3445642&q=%ED%94%BC%ED%86%A0%EC%97%BC%EC%A0%81%EC%9A%A9%EA%B8%B0+%E8%A2%AB%E8%A8%8E%E5%8E%AD%E7%9A%84%E5%8B%87%E6%B0%A3+%EB%AF%B8%EC%9B%80%EB%B0%9B%EC%9D%84+%EC%9A%A9%EA%B8%B0+%28%E6%97%A5%E6%9C%AC%E5%8E%9F%E4%BD%9C%29',
    },
    {
      authors: ['알프레드 아들러'],
      contents:
        '아들러가 말하는 ‘용기’가 이 시대를 사는 독자들에게 힘을 발휘하는 까닭은, 용기를 갖고 주체적으로 세상을 살아나가는 방법을 탐구하는 것이 바로 아들러 자신의 문제였기 때문이다. 아들러는 자신이 겪은 그 아픔을 자신만의 경험으로 축소시키지 않고 사회 전반의 관심사로 확장하였다.  아들러는 “난 오늘부터 용기 있는 사람이 될 거야”라고 다짐한다고 해서 쉽게 그 힘을 갖게 되는 것이 아니라는 점을 잘 알았다. 아들러는 건강한 삶을 살기 위해 자기 삶',
      datetime: '2015-10-20T00:00:00.000+09:00',
      isbn: '1157790380 9791157790388',
      price: 16000,
      publisher: '스마트북',
      sale_price: 14400,
      status: '정상판매',
      thumbnail:
        'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1577785%3Ftimestamp%3D20190131012431',
      title: '오늘을 살아갈 용기 아들러 심리학',
      translators: ['유진상'],
      url: 'https://search.daum.net/search?w=bookpage&bookId=1577785&q=%EC%98%A4%EB%8A%98%EC%9D%84+%EC%82%B4%EC%95%84%EA%B0%88+%EC%9A%A9%EA%B8%B0+%EC%95%84%EB%93%A4%EB%9F%AC+%EC%8B%AC%EB%A6%AC%ED%95%99',
    },
    {
      authors: ['윤정'],
      contents:
        '마음을 털어놓다가 자기도 모르게 흘린 눈물방울이 코알라 아줌마가 키우고 있는 유칼립투스 화분에 쏙 들어가면 결제가 완료된다. 툭하면 까먹고 실수가 잦은 해리는 덜렁대는 성격이 고민이고, 짓궂은 장난을 치는 걸 좋아하는 익준이는 친구들에게 미움을 받게 되어 울적하다. 두 어린이는 코알라 미용실에서 각자의 속내를 모두 털어놓고, 특이한 마법 머리를 얻게 된다. 해리는 실수를 만회할 수 있도록 시간을 잠시 멈춰 주는 ‘얼음땡 머리’, 익준이는 선을 넘는 장난을',
      datetime: '2025-03-28T00:00:00.000+09:00',
      isbn: ' 9791173321085',
      price: 9100,
      publisher: '주니어김영사',
      sale_price: -1,
      status: '정상판매',
      thumbnail:
        'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F6881159%3Ftimestamp%3D20250402110224',
      title: '고민 싹둑! 코알라 미용실 3: 덜렁대거나 미움받을 때',
      translators: [],
      url: 'https://search.daum.net/search?w=bookpage&bookId=6881159&q=%EA%B3%A0%EB%AF%BC+%EC%8B%B9%EB%91%91%21+%EC%BD%94%EC%95%8C%EB%9D%BC+%EB%AF%B8%EC%9A%A9%EC%8B%A4+3%3A+%EB%8D%9C%EB%A0%81%EB%8C%80%EA%B1%B0%EB%82%98+%EB%AF%B8%EC%9B%80%EB%B0%9B%EC%9D%84+%EB%95%8C',
    },
  ],
  meta: {
    is_end: false,
    pageable_count: 27,
    total_count: 27,
  },
};
