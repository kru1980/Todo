import React from "react";
import { Card, List } from "antd";

import { Link } from "react-router-dom";

const ProjectLists = props => {
  const { todos } = props;
  return (
    <div>
      <div style={{ padding: 24, background: "orange" }}>
        {todos && (
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 3
            }}
            dataSource={todos}
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>
                  <p>{item.title}</p>
                  {/* {<Link to={`/todo/${item.id}`}>More</Link>} */}
                </Card>
              </List.Item>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectLists;
