/**
 * @author JoSeungHee <sa02045@github.com>
 */
/**
 * Todo 타입 정의
 * @typedef {Object} Todo
 * @property {number} id 아이디
 * @property {string} content 내용
 * @property {boolean} isCompleted 완료여부
 * @property {string} category 카테고리
 * @property {string[]} [tags] 태그들
 */

/**
 * 생성에 필요한 CreateTodo 타입 정의
 * @typedef {Object} CreateTodo
 * @property {!string} content 내용
 * @property {boolean} isCompleted 완료여부
 * @property {string} category 카테고리
 * @property {string[]} [tags] 태그들
 */

/**
 * 수정에 필요한 UpdateTodo 타입 정의
 * @typedef {Object} UpdateTodo
 * @property {string} [content] 내용
 * @property {boolean} [isCompleted] 완료여부
 * @property {string} [category] 카테고리
 * @property {string} [oldTag] 이전태그
 * @property {string} [newTag] 새로운태그
 */

/**
 * Todo 앱을 만들기 위한 클래스
 * @constructor
 */
class TodoListApp {
  constructor() {}

  /**
   * 할 일을 추가할 수 있다.
   * 내용없이 추가할 수 없다.
   * @param {CreateTodo} createTodo 생성할 Todo 타입
   */
  createTodo({ content, isCompleted, category, tags }) {}

  /**
   * 모든 할 일을 조회할 수 있다.
   * @return {Todo[]} 모든 할일 목록
   */
  readAllTodoList() {}

  /**
   * ID를 기반으로 특정 할 일을 조회할 수 있다.
   * @param {number} id 지울 할일의 아이디
   * @return {Todo} 조회할 할일
   */
  readTodoById(id) {}

  /**
   * ID를 제외한 모든 속성을 수정할 수 있다.
   * 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {number} id 수정할 할일의 아이디
   * @param {UpdateTodo} updateTodo 수정할 할일
   */
  updateTodoById(id, { content, isCompleted, category, oldTag, newTag }) {}

  /**
   * ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * @param {number} id 삭제할 아이디
   */
  deleteTodoById(id) {}

  /**
   * 특정 할 일의 특정 태그를 삭제할 수 있다.
   * @param {number} id 삭제할 할일 아이디
   * @param {string} tag 삭제할 할일 태그
   */
  deleteTagById(id, tag) {}

  /**
   * 모든 할 일을 제거할 수 있다.
   */
  deleteAllTodoList() {}
}
